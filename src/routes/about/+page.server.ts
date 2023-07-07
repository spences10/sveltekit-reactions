import redis from '$lib/redis.js'

export const load = async ({ url: { pathname } }) => {
	const reactions = ['likes', 'hearts', 'poops', 'parties']

	const promises = reactions.map((reaction) =>
		redis.get(`${pathname}:${reaction}`)
	)
	const results = await Promise.all(promises)

	const counts: ReactionCount = {}
	reactions.forEach((reaction, index) => {
		counts[reaction] = results[index] || '0'
	})

	return {
		counts,
	}
}

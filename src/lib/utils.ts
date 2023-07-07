import redis from './redis.js'

const reactions = ['likes', 'hearts', 'poops', 'parties']

export async function get_reaction_count(
	pathname: string
): Promise<ReactionCount> {
	const promises = reactions.map((reaction) =>
		redis.get(`${pathname}:${reaction}`)
	)
	const results = await Promise.all(promises)

	const counts: ReactionCount = {}
	reactions.forEach((reaction, index) => {
		counts[reaction] = results[index] || '0'
	})

	return counts
}

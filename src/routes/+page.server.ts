import redis from '$lib/redis'
import { get_reaction_count } from '$lib/utils.js'

export const actions = {
	default: async ({ request, url }) => {
		const data = await request.formData()
		const reaction = data.get('reaction')
		const path = url.searchParams.get('path')

		const redisKey = `${path}:${reaction}`

		const result = await redis.incr(redisKey)

		return {
			success: true,
			status: 200,
			body: {
				success: true,
				reaction: reaction,
				path: path,
				count: result,
			},
		}
	},
}

export const load = async ({ url: { pathname } }) => {
	const counts = await get_reaction_count(pathname)
	return { counts }
}

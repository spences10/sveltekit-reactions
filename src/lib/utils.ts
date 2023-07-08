import { reactions } from './config'
import { redis } from './redis'

const reaction_types = reactions.map((reaction) => reaction.type)

export async function get_reaction_count(
	pathname: string
): Promise<ReactionCount> {
	const promises = reaction_types.map((reaction) =>
		redis.get(`${pathname}:${reaction}`)
	)
	const results = await Promise.all(promises)

	const counts = {} as ReactionCount
	reaction_types.forEach((reaction, index) => {
		counts[reaction] = Number(results[index]) || 0
	})

	return counts
}

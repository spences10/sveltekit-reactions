import { get_reaction_count } from '$lib/utils'

export const load = async ({ url: { pathname } }) => {
	const count = await get_reaction_count(pathname)
	return { count }
}

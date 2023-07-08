import { get_reaction_count } from '$lib/utils.js'

export const load = async ({ url: { pathname } }) => {
	const counts = await get_reaction_count(pathname)
	return { counts }
}

<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionResult } from '@sveltejs/kit'
	import { writable } from 'svelte/store'

	export let path: string | null = '/'
	export let data: ReactionsData | null = null
	export let reactions: { type: string; emoji: string }[] = [
		{ type: 'likes', emoji: '👍' },
		{ type: 'hearts', emoji: '❤️' },
		{ type: 'poops', emoji: '💩' },
		{ type: 'parties', emoji: '🎉' },
	]

	let button_disabled = writable(false)

	const handle_result = (result: ActionResult) => {
		if (result.type === 'failure') {
			$button_disabled = true
			setTimeout(() => {
				$button_disabled = false
			}, result?.data?.time_remaining * 1000)
		}
	}
</script>

<div class="flex items-center justify-center h-screen">
	<form
		method="POST"
		action="/?path={path}"
		use:enhance={() => {
			return ({ update, result }) => {
				handle_result(result)
				console.log(JSON.stringify(result, null, 2))
				update({ reset: false })
			}
		}}
		class="space-x-4"
	>
		{#each reactions as reaction}
			<button
				name="reaction"
				type="submit"
				value={reaction.type}
				class="btn btn-primary text-3xl"
				disabled={$button_disabled}
			>
				<span>
					{reaction.emoji}
					{data?.counts?.[reaction.type] || 0}
				</span>
			</button>
		{/each}
	</form>
</div>

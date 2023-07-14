<script lang="ts">
	import { enhance } from '$app/forms'

	export let path: string | null = '/'
	export let data: ReactionsData | null = null
	export let reactions: { type: string; emoji: string }[] = [
		{ type: 'likes', emoji: '👍' },
		{ type: 'hearts', emoji: '❤️' },
		{ type: 'poops', emoji: '💩' },
		{ type: 'parties', emoji: '🎉' },
	]
</script>

<div class="flex items-center justify-center h-screen">
	<form
		method="POST"
		action="/?path={path}"
		use:enhance
		class="space-x-4"
	>
		{#each reactions as reaction}
			<button
				name="reaction"
				type="submit"
				value={reaction.type}
				class="btn btn-primary text-3xl"
			>
				<span>
					{reaction.emoji}
					{data?.counts?.[reaction.type] || 0}
				</span>
			</button>
		{/each}
	</form>
</div>

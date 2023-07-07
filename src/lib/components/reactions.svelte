<script lang="ts">
	import { enhance } from '$app/forms'
	import { spring } from 'svelte/motion'

	export let path: string | null = '/'
	export let data: ReactionsData | null = null
	export let reactions: { type: string; emoji: string }[] = [
		{ type: 'likes', emoji: '👍' },
		{ type: 'hearts', emoji: '❤️' },
		{ type: 'poops', emoji: '💩' },
		{ type: 'parties', emoji: '🎉' },
	]

	let count = 1000

	const displayed_count = spring()
	$: displayed_count.set(count)
	$: offset = modulo($displayed_count, 1)

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m
	}
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<div class="w-30 h-20 overflow-hidden text-center relative">
	<div
		class="absolute w-full h-full"
		style="transform: translate(0, {100 * offset}%)"
	>
		<strong
			class="absolute flex w-full h-full items-center justify-center text-6xl"
			style="top: -100%"
			aria-hidden="true"
		>
			{Math.floor($displayed_count + 1)}
		</strong>
		<strong
			class="absolute flex w-full h-full items-center justify-center text-6xl"
		>
			{Math.floor($displayed_count)}
		</strong>
	</div>
</div>

<button on:click={() => (count += 1)}>Click</button>

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

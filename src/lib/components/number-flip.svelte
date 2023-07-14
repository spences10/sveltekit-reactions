<script lang="ts">
	import { number_crunch } from '$lib/number-crunch'
	import { spring } from 'svelte/motion'

	let count = 999
	export let font_size = 'text-2xl'

	const displayed_count = spring()
	$: displayed_count.set(count)
	$: offset = modulo($displayed_count, 1)

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m
	}

	let base_width = 2
	let padding = 2
	let character_width = 1

	// calculate initial button width
	let crunched_number = number_crunch(count)
	let crunched_length = crunched_number.length
	let button_width =
		base_width + padding + character_width * crunched_length + 'rem'

	function handle_click() {
		count += 1
		displayed_count.set(count)
		crunched_number = number_crunch(count + 1)
		crunched_length = crunched_number.length
		button_width =
			base_width + padding + character_width * crunched_length + 'rem'
	}
</script>

{button_width}

<br />

{count}

<br />

<button
	class="btn lowercase btn-primary overflow-hidden relative"
	on:click={handle_click}
	style:width={button_width}
>
	<div
		class="absolute left-12 h-full"
		style="transform: translate(0, {100 * offset}%)"
	>
		<div
			class="absolute flex h-full items-center {font_size}"
			style="top: -100%"
			aria-hidden="true"
		>
			<strong>
				{number_crunch(Math.floor($displayed_count + 1))}
			</strong>
		</div>
		<div class="absolute flex h-full items-center {font_size}">
			<strong>
				{number_crunch(Math.floor($displayed_count))}
			</strong>
		</div>
	</div>
	<div class="absolute flex h-full items-center left-3">
		<span class={font_size}>🎉</span>
	</div>
</button>

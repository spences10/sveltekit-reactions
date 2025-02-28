<script lang="ts">
	import { enhance } from '$app/forms';
	import { reactions } from '$lib/config';
	import type { ActionResult } from '@sveltejs/kit';
	import { writable } from 'svelte/store';
	import NumberFlip from './number-flip.svelte';

	interface Props {
		path?: string | null;
		data?: ReactionsData | null;
	}

	let { path = '/', data = null }: Props = $props();

	let button_disabled = writable(false);

	const handle_result = (result: ActionResult) => {
		if (result.type === 'failure') {
			$button_disabled = true;
			setTimeout(() => {
				$button_disabled = false;
			}, result?.data?.time_remaining * 1000);
		}
	};

	let show_static_buttons = $state(false);
</script>

<div class="mb-4 flex justify-center">
	<label class="label cursor-pointer space-x-5">
		<span class="label-text">Show static buttons</span>
		<input
			type="checkbox"
			bind:checked={show_static_buttons}
			class="toggle toggle-primary toggle-sm"
		/>
	</label>
</div>

<div class="flex justify-center">
	<form
		method="POST"
		action="/api/reactions?path={path}"
		use:enhance={() => {
			return ({ update, result }) => {
				handle_result(result);
				console.log(JSON.stringify(result, null, 2));
				update({ reset: false });
			};
		}}
		class="grid grid-cols-2 gap-5 sm:flex"
	>
		{#if !show_static_buttons}
			{#each reactions as reaction}
				<NumberFlip
					count={data?.count?.[reaction.type] || 0}
					emoji={reaction.emoji}
					value={reaction.type}
					disabled={$button_disabled}
					aria_label={`Submit ${
						reaction.type
					} reaction. Current count: ${
						data?.count?.[reaction.type] || 0
					}`}
				/>
			{/each}
		{:else}
			{#each reactions as reaction}
				<button
					name="reaction"
					type="submit"
					value={reaction.type}
					class="btn btn-primary text-3xl font-bold shadow-xl"
					disabled={$button_disabled}
					aria-label={`Submit ${
						reaction.type
					} reaction. Current count: ${
						data?.count?.[reaction.type] || 0
					}`}
				>
					<span>
						{reaction.emoji}
						{data?.count?.[reaction.type] || 0}
					</span>
				</button>
			{/each}
		{/if}
	</form>
</div>

<script lang="ts">
	import { page } from '$app/state'
	import Reactions from '$lib/components/reactions.svelte'

	interface Props {
		data?: ReactionsData | null
	}

	let { data = null }: Props = $props()

	let path = page.route.id
</script>

<Reactions {path} {data} />

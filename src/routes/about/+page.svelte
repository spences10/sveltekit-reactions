<script lang="ts">
	import { page } from '$app/stores'
	import Reactions from '$lib/components/reactions.svelte'

	export let data: ReactionsData | null = null

	let path = $page.route.id
</script>

<Reactions {path} {data} />

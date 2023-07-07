<script lang="ts">
	import { page } from '$app/stores'
	import Reactions from '$lib/components/reactions.svelte'

	export let data: ReactionsData | null = null

	let path = $page.route.id
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
	documentation
</p>

<Reactions {path} {data} />

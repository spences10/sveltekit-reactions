<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="prose prose-xl container mx-auto max-w-3xl px-4">
	<h1>SvelteKit reactions</h1>
	<p>
		An example project to demonstrate how to add emoji reactions to
		your SvelteKit project.
	</p>

	<p>
		Uses Upstash redis for storing the data and Upstash rate limit to
		disable the buttons.
	</p>

	<p>It uses SvelteKit form actions to handle the form submission.</p>

	<p>
		The component points to one action that can be used in different
		routes.
	</p>

	<p>
		<a class="link link-primary" href="/about">About</a>
		<a class="link link-primary" href="/">Home</a>
	</p>

	{@render children()}

	<p>
		<a
			class="link link-primary"
			href="https://github.com/spences10/sveltekit-reactions"
		>
			Sauce
		</a>
	</p>
</main>

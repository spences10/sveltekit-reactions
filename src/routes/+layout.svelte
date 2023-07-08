<script lang="ts">
	import '../app.postcss'
</script>

<main class="container max-w-3xl mx-auto px-4 prose prose-xl">
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

	<slot />

	<p>
		<a
			class="link link-primary"
			href="https://github.com/spences10/sveltekit-reactions"
		>
			Sauce
		</a>
	</p>
</main>

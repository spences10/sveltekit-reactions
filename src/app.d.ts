// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	interface ReactionCount {
		[key: string]: string
	}
	interface ReactionsData {
		path: string
		counts: ReactionCount
	}
}

export {}

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
		[key: string]: number
	}
	interface ReactionsData {
		path: string
		count: ReactionCount
	}
}

export {}

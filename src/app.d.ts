// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface ReactionCount {
		[key: string]: number;
	}
	interface ReactionsData {
		path: string;
		count: ReactionCount;
	}
}

export {};

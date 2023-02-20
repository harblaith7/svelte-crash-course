import { writable } from 'svelte/store';

export interface Answers {
	id: number;
	isCorrect: boolean | null;
}

export const answers = writable<Answers[]>([]);

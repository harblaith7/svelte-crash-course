import { error } from '@sveltejs/kit';
import quizzes from '../../../data.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: { slug: string } }) {
	const quiz = quizzes.find((quiz) => quiz.id === parseInt(params.slug));

	if (!quiz) throw error(404, 'Not found');

	return quiz;
}

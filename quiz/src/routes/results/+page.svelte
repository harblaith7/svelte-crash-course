<script lang="ts">
	import { goto } from '$app/navigation';
	import { answers, type Answers } from '../../store';
	import { onMount } from 'svelte';

	let answersValue: Answers[] = [];

	answers.subscribe((value) => {
		answersValue = value;
	});

	const numberOfCorrectAnswers = answersValue.reduce((sum, answer) => {
		if (answer.isCorrect) {
			return sum + 1;
		} else return sum;
	}, 0);

	const numberOfQuestions = answersValue.length;

	const handleGoBack = () => {
		answers.set([]);
		goto('/');
	};

	onMount(() => {
		if (!answersValue.length) goto('/');
	});
</script>

<div class="text-center">
	<h3 style="font-size: 100px">
		{((numberOfCorrectAnswers / numberOfQuestions) * 100).toFixed(0)}%
	</h3>
	<p style="font-size: 20px">{numberOfCorrectAnswers}/{numberOfQuestions}</p>
	<button on:click={handleGoBack}>Go Back</button>
</div>

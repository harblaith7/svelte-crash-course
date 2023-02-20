<script lang="ts">
	import { onMount } from 'svelte';
	import { answers, type Answers } from '../../../store';
	import { goto } from '$app/navigation';
	import QuestionProgressCircle from './components/QuestionProgressCircle.svelte';
	import QuestionText from './components/QuestionText.svelte';
	import QuestionOption from './components/QuestionOption.svelte';
	import QuestionButton from './components/QuestionButton.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	let currentQuestion = 0;
	let selectedOption: null | string = null;
	let showCorrectAnswer = false;

	let answersValue: Answers[];

	answers.subscribe((value) => {
		answersValue = value;
	});

	$: question = data.questions[currentQuestion];

	const handleSelectOption = (label: string) => {
		selectedOption = label;
	};

	const handleSubmit = () => {
		showCorrectAnswer = true;

		answers.update((n) => {
			const updatedAnswers = n;
			updatedAnswers[currentQuestion].isCorrect =
				selectedOption === data.questions[currentQuestion].answer;
			return updatedAnswers;
		});
	};

	const handleNext = () => {
		showCorrectAnswer = false;
		selectedOption = null;
		if (currentQuestion === data.questions.length - 1) {
			goto('/results');
		} else {
			currentQuestion++;
		}
	};

	onMount(() => {
		answers.set(
			data.questions.map((question: any) => {
				return {
					id: question.id,
					isCorrect: null
				};
			})
		);
	});
</script>

<div class="w-full">
	<div class="flex justify-center">
		{#each answersValue as answer}
			<QuestionProgressCircle isCorrect={answer.isCorrect} />
		{/each}
	</div>
	<QuestionText text={question.question} />
	<div class="flex justify-between flex-wrap cursor-pointer">
		{#each data.questions[currentQuestion].options as option (option.id)}
			<QuestionOption
				{selectedOption}
				{option}
				{showCorrectAnswer}
				answer={question.answer}
				{handleSelectOption}
			/>
		{/each}
	</div>
	<QuestionButton {handleNext} {handleSubmit} {showCorrectAnswer} />
</div>

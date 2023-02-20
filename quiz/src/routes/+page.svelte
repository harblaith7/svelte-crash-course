<script>
	import Card from '../components/Card.svelte';
	import quizzes from '../data.json';
</script>

<div>
	{#each quizzes as quiz (quiz.id)}
		<Card {quiz} />
	{/each}
</div>

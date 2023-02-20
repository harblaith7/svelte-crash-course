<script lang="ts">
	export let showCorrectAnswer: boolean;
	export let handleNext: () => void;
	export let handleSubmit: () => void;
</script>

<div class="text-center">
	{#if showCorrectAnswer}
		<button class="bg-blue-900 text-white font-bold p-4 rounded px-16" on:click={handleNext}
			>Next</button
		>
	{:else}
		<button class="bg-blue-900 text-white font-bold p-4 rounded px-16" on:click={handleSubmit}
			>Submit</button
		>
	{/if}
</div>

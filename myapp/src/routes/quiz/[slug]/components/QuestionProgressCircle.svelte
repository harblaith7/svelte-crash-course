<script lang="ts">
	export let isCorrect: boolean | null;
</script>

{#if isCorrect === null}
	<div class="bg-gray-200 w-4 h-4 m-3 rounded-full" />
{:else if isCorrect === true}
	<div class="bg-green-200 w-4 h-4 m-3 rounded-full" />
{:else if isCorrect === false}
	<div class="bg-red-200 w-4 h-4 m-3 rounded-full" />
{/if}

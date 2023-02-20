<script lang="ts">
	export let selectedOption: null | string;
	export let option: { label: string; text: string };
	export let showCorrectAnswer: boolean;
	export let answer: string;
	export let handleSelectOption: (label: string) => void;
</script>

<button
	class={`bg-gray-200 rounded w-[49%] text-center p-2 mb-4 py-5 ${
		option.label === selectedOption ? 'bg-yellow-200' : null
	} ${showCorrectAnswer && (answer === option.label ? 'bg-green-300' : 'bg-red-300')}`}
	on:click={() => handleSelectOption(option.label)}
>
	{option.text}
</button>

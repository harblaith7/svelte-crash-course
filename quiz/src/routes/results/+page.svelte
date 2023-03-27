<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { answers, type Answer } from "../../store";
  let answersValue: Answer[] = [];

  answers.subscribe((value) => {
    answersValue = value;
  });

  const numberOfCorrectAnswers = answersValue.reduce((sum, answer) => {
    if (answer.isCorrect) {
      return sum + 1;
    }
    return sum;
  }, 0);

  const numberOfQuestions = answersValue.length;

  const handleBack = () => {
    answers.set([]);
    goto("/");
  };

  onMount(() => {
    if (!answersValue.length) goto("/");
  });
</script>

<div class="text-center">
  <h3>{((numberOfCorrectAnswers / numberOfQuestions) * 100).toFixed(0)}%</h3>
  <p>{numberOfCorrectAnswers}/{numberOfQuestions}</p>
  <button on:click={handleBack}>Go Back</button>
</div>

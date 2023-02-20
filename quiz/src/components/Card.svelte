<script lang="ts">
	import * as images from '../images';
	interface Quiz {
		id: number;
		name: string;
		imageUrl: keyof typeof images;
		questions: { id: number; text: string; options: { id: number; text: string; label: string } }[];
	}

	export let quiz: Quiz;
</script>

<div class="quiz-card shadow w-[250px] rounded overflow-hidden cursor-pointer m-2">
	<img src={images[quiz.imageUrl]} alt="" class="h-44" />
	<div class="flex items-center justify-between py-3 px-2">
		<h1 class="font-bold">{quiz.name}</h1>
		<p>{quiz.questions.length} questions</p>
	</div>
</div>

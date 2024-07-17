<script lang="ts">
	export let title;
</script>

<section class="my-6 space-y-5">
	<h2 class="text-2xl font-bold lowercase text-gray-100 dark:text-gray-200 md:text-3xl">{title}</h2>
	<p class="leading-8 text-gray-300 dark:text-gray-700 md:text-xl">
		<slot></slot>
	</p>
</section>

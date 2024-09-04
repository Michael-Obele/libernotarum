<script lang="ts">
	export let title;
</script>

<section class="my-6 space-y-5">
	<h2 class="text-accent1-light text-2xl font-bold lowercase dark:text-gray-200 md:text-3xl">
		{title}
	</h2>
	<p class="gap-2 leading-loose text-gray-300 dark:text-gray-200 md:text-xl">
		<slot></slot>
	</p>
</section>

<script lang="ts">
	import { Github, Twitter } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		name: string;
		role: string;
		image: string;
		github?: string;
		twitter?: string;
	}

	let {
		name,
		role,
		image,
		github = '',
		twitter = ''
	}: Props = $props();
</script>

<div
	class="group relative rounded-lg border border-primary/10 bg-background/95 p-6 text-center backdrop-blur transition-all hover:border-primary/30"
	transition:fade
>
	<div
		class="absolute -inset-px -z-10 rounded-lg bg-gradient-to-br from-primary/25 via-primary/5 to-primary/0 opacity-0 blur-xl transition-all group-hover:opacity-100"
	></div>
	<img
		src={image}
		alt={name}
		class="mx-auto h-24 w-24 rounded-full border-2 border-primary/10 object-cover transition-all group-hover:border-primary/30"
	/>
	<h3 class="mt-4 text-lg font-semibold text-primary">{name}</h3>
	<p class="text-sm text-muted-foreground">{role}</p>

	<div class="mt-4 flex justify-center space-x-3">
		{#if github}
			<a
				href={github}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-full border border-primary/10 p-2 text-primary transition-colors hover:bg-primary/5"
			>
				<span class="sr-only">GitHub</span>
				<Github class="h-4 w-4" />
			</a>
		{/if}
		{#if twitter}
			<a
				href={twitter}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-full border border-primary/10 p-2 text-primary transition-colors hover:bg-primary/5"
			>
				<span class="sr-only">Twitter</span>
				<Twitter class="h-4 w-4" />
			</a>
		{/if}
	</div>
</div>

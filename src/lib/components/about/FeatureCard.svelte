<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Props {
		icon: any;
		title: string;
		description: string;
	}

	let { icon: Icon, title, description }: Props = $props();
</script>

<div
	class="group relative rounded-lg border border-primary/10 bg-background/95 p-6 backdrop-blur transition-all hover:border-primary/30"
	transition:fade
>
	<div
		class="absolute -inset-px -z-10 rounded-lg bg-gradient-to-br from-primary/25 via-primary/5 to-primary/0 opacity-0 blur-xl transition-all group-hover:opacity-100"
	></div>
	<div class="flex items-center gap-4">
		<div class="rounded-full border border-primary/10 bg-primary/5 p-3 text-primary">
			<Icon class="h-6 w-6" />
		</div>
		<div>
			<h3 class="text-lg font-semibold text-primary">{title}</h3>
			<p class="mt-2 text-sm text-muted-foreground">{description}</p>
		</div>
	</div>
</div>

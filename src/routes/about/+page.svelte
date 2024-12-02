<script lang="ts">
	import type { PageData } from './$types';
	import FeatureCard from '$lib/components/about/FeatureCard.svelte';
	import TeamMember from '$lib/components/about/TeamMember.svelte';
	import { BookOpen, PenLine, Sparkles, Brain, Github, Rocket, Heart } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const features = [
		{
			icon: PenLine,
			title: 'Live Markdown Preview',
			description: 'See your formatting come to life instantly as you type, making writing and editing a seamless experience.'
		},
		{
			icon: Brain,
			title: 'Smart Organization',
			description: 'Powerful tools to help you organize your thoughts, with smart search and automatic categorization.'
		},
		{
			icon: Sparkles,
			title: 'Beautiful Interface',
			description: 'A modern, clean interface that adapts to your preferences with full dark mode support.'
		},
		{
			icon: BookOpen,
			title: 'Developer Friendly',
			description: 'Built with developers in mind, featuring syntax highlighting and code block support.'
		},
		{
			icon: Rocket,
			title: 'Blazing Fast',
			description: 'Built with SvelteKit for incredible performance and a smooth user experience.'
		},
		{
			icon: Heart,
			title: 'Open Source',
			description: 'Free and open source under the GPL v3 license. Built by the community, for the community.'
		}
	];
</script>

<svelte:head>
	<title>About - Liber Notarum</title>
	<meta
		name="description"
		content="Learn about Liber Notarum, a modern markdown editor built for the future of note-taking."
	/>
</svelte:head>

<main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" in:fade>
	<!-- Hero Section -->
	<div class="text-center">
		<h1 class="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
			Transforming Note-Taking
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
			Liber Notarum is more than just a note-taking app. It's a powerful tool designed to help you capture,
			organize, and share your thoughts with elegance and efficiency.
		</p>
	</div>

	<!-- Mission Section -->
	<div class="mt-24">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-8">
			<div class="flex flex-col justify-center">
				<h2 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Mission</h2>
				<p class="mt-4 text-lg text-muted-foreground">
					We believe that everyone deserves a beautiful, powerful, and free tool for organizing their
					thoughts. That's why we created Liber Notarum - a modern markdown editor that combines
					simplicity with power.
				</p>
				<p class="mt-4 text-lg text-muted-foreground">
					Built on the principles of open source and community collaboration, we're committed to creating
					a tool that evolves with your needs while remaining free and accessible to all.
				</p>
			</div>
			<div class="relative">
				<div class="absolute -inset-4">
					<div
						class="h-full w-full rounded-lg bg-gradient-to-r from-primary/30 via-primary/10 to-primary/0 opacity-30 blur-lg"
					></div>
				</div>
				<div class="relative rounded-lg border border-primary/10 bg-background/95 p-8 backdrop-blur">
					<div class="flex items-center gap-4">
						<div class="rounded-full border border-primary/10 bg-primary/5 p-3">
							<Github class="h-6 w-6 text-primary" />
						</div>
						<div>
							<h3 class="text-xl font-semibold text-primary">Open Source First</h3>
							<p class="mt-2 text-muted-foreground">
								Join our growing community of contributors and help shape the future of note-taking.
							</p>
						</div>
					</div>
					<div class="mt-8">
						<a
							href="https://github.com/Michael-Obele/libernotarum"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
						>
							View on GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Features Grid -->
	<div class="mt-24">
		<h2 class="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
			Built for Modern Minds
		</h2>
		<p class="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
			Every feature in Liber Notarum is crafted with care, designed to enhance your note-taking
			experience without getting in your way.
		</p>

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<FeatureCard {...feature} />
			{/each}
		</div>
	</div>

	<!-- Team Section -->
	<div class="mt-24">
		<h2 class="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
			Meet the Creator
		</h2>
		<p class="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
			Liber Notarum is brought to you by passionate developers who believe in the power of open source
			software.
		</p>

		<div class="mt-12 flex justify-center">
			<TeamMember
				name="Michael Obele"
				role="Creator & Lead Developer"
				image="https://github.com/Michael-Obele.png"
				github="https://github.com/Michael-Obele"
				twitter="https://x.com/Dev_Obele"
			/>
		</div>
	</div>

	<!-- Call to Action -->
	<div class="mt-24 text-center">
		<h2 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Start Your Journey</h2>
		<p class="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
			Join thousands of users who have already transformed their note-taking experience with Liber
			Notarum.
		</p>
		<div class="mt-8">
			<a
				href="/app"
				class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				Get Started
			</a>
		</div>
	</div>
</main>

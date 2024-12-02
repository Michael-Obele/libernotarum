<script lang="ts">
	import NavAddOns from '$lib/blocks/NavAddOns.svelte';
	import Footer from './Footer.svelte';
	import type { PageData } from './$types';
	import Navbar from '$lib/blocks/Navbar.svelte';
	import TextSection from './TextSection.svelte';
	import Logo from '$lib/logos/Logo.svelte';
	import LogoLong from '$lib/logos/Logo-Long.svelte';
	import ComingSoonV1 from '$lib/img/Coming Soon 1.png';
	import { MoveDown, PenLine } from 'lucide-svelte';
	import Features from '$lib/components/Features.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import { onMount } from 'svelte';
	import BlurFade from '$lib/blocks/BlurFade.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	function smoothScrollTo(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}

	$effect(() => {
		// Small delay to ensure smooth animation after page load
		setTimeout(() => {
			const mainElement = document.querySelector('main');
			if (mainElement) {
				mainElement.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	});
</script>

<svelte:head>
	<title>Liber Notarum - The Future of Note-Taking</title>
	<meta
		name="description"
		content="Experience the future of note-taking with Liber Notarum. Our modern, open-source platform combines powerful features with elegant simplicity for seamless knowledge management."
	/>
	<meta
		name="keywords"
		content="note taking, markdown editor, open source, digital workspace, knowledge management, collaboration, secure notes, AI-powered notes"
	/>
	<link rel="canonical" href="https://libernotarum.tech/" />
</svelte:head>


	<!-- Hero Section -->
	<main class="relative mx-auto mt-3 min-h-screen max-w-7xl px-6 text-center md:px-8">
		<!-- Announcement Banner -->
		<div class="backdrop-filter-[12px] animate-fade-in group mt-5 inline-flex h-7 items-center justify-between gap-1 rounded-full border border-primary/10 bg-primary/5 px-3 text-xs text-primary transition-all ease-in hover:cursor-pointer hover:bg-primary/10 dark:border-primary/60">
			<span>✨ Welcome to the future of note-taking</span>
		</div>

		<!-- Hero Content -->
		<div class="mt-8 space-y-8">
			<div class="flex items-center justify-center">
				<span class="md:hidden">
					<Logo />
				</span>
				<span class="hidden md:block">
					<LogoLong />
				</span>
			</div>
			
			<div class="space-y-4">
				<h1 class="text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
					Your Ideas, <span class="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Beautifully Organized</span>
				</h1>
				
				<p class="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
					Experience the future of note-taking with our modern, open-source platform that combines
					powerful features with elegant simplicity.
				</p>

				<div class="mx-auto max-w-xl rounded-2xl bg-slate-50/50 px-4 py-2 text-sm text-muted-foreground dark:bg-slate-900/50">
					<em>Liber Notarum</em> — Latin for "Book of Notes", embodying the timeless art of knowledge preservation 
					with modern innovation.
				</div>
			</div>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a href="/app" class="inline-flex min-w-[160px] items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/20">
					Get Started
				</a>
				<button
					onclick={() => smoothScrollTo('features')}
					class="inline-flex min-w-[160px] items-center justify-center rounded-md border border-slate-200 bg-background px-8 py-3 text-sm font-medium shadow-sm transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-lg dark:border-slate-800 dark:hover:bg-slate-900"
				>
					Learn More
				</button>
			</div>
		</div>

		<button
			onclick={() => smoothScrollTo('features')}
			class="group mt-16 text-muted-foreground transition-colors hover:text-foreground md:mt-24"
		>
			<MoveDown class="size-16 animate-bounce rounded-full border border-slate-200 p-4 shadow-lg transition-all hover:border-primary hover:text-primary dark:border-slate-300 group-hover:dark:border-slate-400" />
		</button>
	</main>

	<!-- Features Section -->
	<section id="features" class="relative overflow-hidden bg-slate-50/50 py-24 dark:bg-slate-900/50">
		<div class="container relative z-10">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Powerful Features</h2>
				<p class="text-lg text-muted-foreground">
					Everything you need for efficient note-taking and knowledge management
				</p>
			</div>
			<Features />
		</div>
	</section>

	<!-- Content Sections -->
	<section class="relative overflow-hidden py-24">
		<!-- Background decoration -->
		<div class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
			<div class="h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-3xl" ></div>
		</div>

		<div class="container relative z-10 max-w-6xl">
			<div class="mx-auto mb-16 max-w-2xl text-center">
				<h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Choose Liber Notarum?</h2>
				<p class="text-lg text-muted-foreground">
					Discover the features that make our platform stand out from the rest
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				{#each data.sections as section, i}
				<BlurFade>
					<ContentSection {section} index={i} />
				</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<!-- Coming Soon -->
	<section class="bg-muted/50 py-20">
		<div class="container text-center">
			<img src={ComingSoonV1} alt="Liber Notarum - Coming Soon" class="mx-auto mb-8 max-w-md" />
			<h2 class="mb-4 text-3xl font-bold">Launching Soon!</h2>
			<p class="text-xl text-muted-foreground">
				Join us in revolutionizing the way you take and organize notes.
			</p>
		</div>
	</section>

<Footer />

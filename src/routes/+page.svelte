<script lang="ts">
	import NavAddOns from '$lib/blocks/NavAddOns.svelte';
	import Footer from './Footer.svelte';
	import type { PageData } from './$types';
	import Navbar from '$lib/blocks/navbar.svelte';
	import TextSection from './TextSection.svelte';
	import Logo from '$lib/logos/Logo.svelte';
	import LogoLong from '$lib/logos/Logo-Long.svelte';
	import ComingSoonV1 from '$lib/img/Coming Soon 1.png';
	import { MoveDown, PenLine } from 'lucide-svelte';
	import Features from '$lib/components/Features.svelte';

	export let data: PageData;

	function smoothScrollTo(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
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

<Navbar>
	<div>
		<!-- Empty Div for spacing -->
	</div>
	<a href="/app" class="flex items-center space-x-2">
		<PenLine />
		<h3 class="text-xl">Get Started</h3>
	</a>

	<div class="flex items-center space-x-3 md:order-3 md:mx-0 md:space-x-0">
		<NavAddOns />
	</div>
</Navbar>

<main>
	<!-- Hero Section -->
	<section class="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
		<div class="space-y-8">
			<div class="flex items-center justify-center">

				<span class="md:hidden">
					<Logo />
				</span>
				<span class="hidden md:block">
					<LogoLong />
				</span>
			</div>
			
			<h1 class="text-4xl font-bold tracking-tighter md:text-6xl">
				Your Ideas, <span class="text-primary">Beautifully Organized</span>
			</h1>
			
			<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
				Experience the future of note-taking with our modern, open-source platform that combines
				powerful features with elegant simplicity.
			</p>

			<div class="flex justify-center gap-4">
				<a href="/app" class="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
					Get Started
				</a>
				<button
					on:click={() => smoothScrollTo('features')}
					class="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
				>
					Learn More
				</button>
			</div>
		</div>

		<button
			on:click={() => smoothScrollTo('features')}
			class="mt-28 text-muted-foreground transition-colors hover:text-foreground"
		>
			<MoveDown class="size-16 animate-bounce rounded-full border border-gray-300 p-4" />
		</button>
	</section>
</main>

	<!-- Features Grid -->
	<section id="features" class="bg-muted/50 py-20">
		<div class="container">
			<h2 class="mb-4 text-center text-3xl font-bold md:text-4xl">Powerful Features</h2>
			<p class="mb-12 text-center text-xl text-muted-foreground">
				Everything you need for efficient note-taking and knowledge management
			</p>
			<Features />
		</div>
	</section>

	<!-- Content Sections -->
	<section class="py-20">
		<div class="container max-w-6xl">
			<div class="grid gap-12 md:grid-cols-2">
				{#each data.sections as section, i}
					<div class="space-y-4">
						<h3 class="text-2xl font-bold">{section.title}</h3>
						<p class="text-muted-foreground">{section.content}</p>
					</div>
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

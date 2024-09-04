<script lang="ts">
	import Footer from './Footer.svelte';
	import type { PageData } from './$types';
	import Navbar from '$lib/blocks/navbar.svelte';
	import TextSection from './TextSection.svelte';
	import Logo from '$lib/logos/Logo.svelte';
	import LogoLong from '$lib/logos/Logo-Long.svelte';
	// import ComingSoonV1 from '$lib/img/Coming Soon 1.svelte';
	import ComingSoonV1 from '$lib/img/Coming Soon 1.png';
	import ComingSoon from '$lib/img/Coming Soon.svelte';
	import { PenLine } from 'lucide-svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Liber Notarum</title>
</svelte:head>

<Navbar>
	<a href="/app" class="flex items-center space-x-2">
		<PenLine />
		<h3 class="text-xl">Start Here</h3>
	</a>
</Navbar>

<div class="mx-auto flex h-screen w-fit flex-col justify-center pb-5 pt-10">
	<span class="md:hidden">
		<Logo />
	</span>
	<span class="hidden md:block">
		<LogoLong />
	</span>
</div>

<header class="bg-primary-light text-secondary-light p-6 text-center font-semibold lg:hidden">
	<h3 class="text-4xl">Coming Soon!</h3>
</header>

<main class="relative flex flex-row bg-gray-700 p-6 text-white dark:bg-gray-950">
	<div class="max-w-2xl px-10">
		<section class="my-6 space-y-5 leading-8">
			<h1 class="text-4xl">Liber Notarum</h1>
			<p class="text-lg capitalize">Note-taking, reimagined.</p>
			<h2 class="text-accent1-light font-mono text-2xl md:text-3xl">
				<span class="text-nowrap font-bold tracking-tighter">/ˈli:bər noʊˈtɑ:rəm/</span>
			</h2>

			<div class="p-6 text-xl dark:text-gray-300">
				<ol class="dark:list-decimal-dark list-decimal space-y-2">
					<li class="mb-4 dark:mb-2">
						The Latin term <strong class="text-yellow-400 dark:text-yellow-300"
							>"Liber Notarum"</strong
						>
						translates to <span class="text-yellow-400 dark:text-yellow-300">"Book of Notes"</span>,
						representing a digital notebook for capturing, organizing, and sharing knowledge.
					</li>
					<li class="mb-4 dark:mb-2">
						Open-source digital notebook for modern note-taking.
						<ul class="dark:list-disc-dark list-disc space-y-2 pl-8">
							<li>
								A constantly evolving project providing powerful <span
									class="text-yellow-400 dark:text-yellow-300">note-taking capabilities</span
								> with an intuitive interface.
							</li>
							<li>Available completely free and without attribution.</li>
							<li>
								Provides features like <span class="text-yellow-400 dark:text-yellow-300"
									>Markdown support</span
								>, <span class="text-yellow-400 dark:text-yellow-300">note templates</span>, and
								<span class="text-yellow-400 dark:text-yellow-300">task management</span>.
							</li>
							<li>
								Ensures robust <span class="text-yellow-400 dark:text-yellow-300">security</span>
								and seamless
								<span class="text-yellow-400 dark:text-yellow-300">collaboration</span>.
							</li>
						</ul>
					</li>
				</ol>
			</div>
		</section>

		<section class="my-6 space-y-5 leading-8">
			<h2 class="text-accent1-light text-2xl font-bold md:text-3xl">
				Your Digital Workspace for Creative Note-Taking
			</h2>
			<p class="md:text-xl">
				Explore a creative, efficient note-taking ecosystem with evolving tools tailored to your
				needs. Experience open-source software freely and without limits.
			</p>
		</section>

		{#each data.sections as text, i}
			<TextSection title={text.title}>
				{text.content}
			</TextSection>
			{#if i === 0}
				<section>
					<h2
						class="text-accent1-light text-2xl font-bold lowercase dark:text-gray-200 md:text-3xl"
					>
						related words
					</h2>
					<ul
						class="mt-4 grid list-disc grid-cols-3 gap-x-5 gap-y-3 pl-6 capitalize text-gray-100 dark:text-gray-200"
					>
						{#each data.relatedWords as word}
							<li>{word}</li>
						{/each}
					</ul>
				</section>
			{/if}
		{/each}
	</div>
	<div class="sticky right-16 top-0 ml-[20vw] mt-[5vh] hidden size-fit pt-[10rem] lg:block">
		<div class="mb-2 size-96">
			<img src={ComingSoonV1} alt="Coming Soon" />
		</div>
		<h3 class="text-center text-3xl font-semibold tracking-tight">Coming Soon!</h3>
	</div>
</main>

<Footer />

<style>
</style>

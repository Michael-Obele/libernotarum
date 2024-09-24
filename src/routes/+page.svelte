<script lang="ts">
	import NavAddOns from '$lib/blocks/NavAddOns.svelte';

	import Footer from './Footer.svelte';
	import type { PageData } from './$types';
	import Navbar from '$lib/blocks/navbar.svelte';
	import TextSection from './TextSection.svelte';
	import Logo from '$lib/logos/Logo.svelte';
	import LogoLong from '$lib/logos/Logo-Long.svelte';
	// import ComingSoonV1 from '$lib/img/Coming Soon 1.svelte';
	import ComingSoonV1 from '$lib/img/Coming Soon 1.png';
	import ComingSoon from '$lib/img/Coming Soon.svelte';
	import { MoveDown, PenLine, Github, Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';

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
	<title>Liber Notarum - Open Source Note Taking</title>
	<meta
		name="description"
		content="Liber Notarum is a free and open-source digital notebook for modern note-taking, offering powerful features like Markdown support, note templates, and task management."
	/>
	<meta
		name="keywords"
		content="note taking, open source, markdown, digital notebook, task management, collaboration, secure notes"
	/>
	<link rel="canonical" href="https://libernotarum.tech/" />
</svelte:head>

<Navbar>
	<div>
		<!-- Empty Div for spacing -->
	</div>
	<a href="/app" class="flex items-center space-x-2">
		<PenLine />
		<h3 class="text-xl">Start Here</h3>
	</a>

	<div class="flex items-center space-x-3 md:order-3 md:mx-0 md:space-x-0">
		<NavAddOns />
	</div>
</Navbar>

<div class="mx-auto flex h-screen w-fit flex-col justify-center">
	<span class="md:hidden">
		<Logo />
	</span>
	<span class="hidden md:block">
		<LogoLong />
	</span>

	<button
		on:click={() => smoothScrollTo('more')}
		class="group mt-[25vh] flex flex-col items-center justify-center text-center text-3xl"
	>
		See More
		<MoveDown class="my-5 group-hover:animate-bounce" />
	</button>
</div>

<div
	id="more"
	class="relative flex flex-row scroll-smooth bg-gray-700 p-6 text-white dark:bg-gray-950"
>
	<div class="max-w-2xl px-10">
		<main class="my-6 space-y-5 leading-8">
			<h1 class="text-4xl">Liber Notarum</h1>
			<p class="text-lg capitalize">Note-taking, reimagined.</p>
			<h2 class="text-accent1-light font-mono text-base sm:text-2xl md:text-3xl">
				<span class="text-nowrap font-bold tracking-tighter">/ˈli:bər noʊˈtɑ:rəm/</span>
			</h2>

			<div class="p-6 text-xl dark:text-gray-300">
				<ol class="dark:list-decimal-dark list-decimal space-y-2">
					{#each data.description as item, i}
						{#if item.type == 'paragraph'}
							<li class="mb-4 dark:mb-2">
								{@html item.content}
							</li>
						{/if}
						{#if item.items !== undefined}
							{#each item.items as list}
								<ul class="dark:list-disc-dark list-disc space-y-2 pl-8">
									<li>
										{@html list}
									</li>
								</ul>
							{/each}
						{/if}
					{/each}
				</ol>
			</div>
		</main>

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
						class="mt-4 flex list-disc grid-cols-3 flex-col gap-x-5 gap-y-3 pl-6 capitalize text-gray-100 dark:text-gray-200 sm:grid"
					>
						{#each data.relatedWords as word}
							<li>{word}</li>
						{/each}
					</ul>
				</section>
			{/if}
		{/each}
	</div>
	<section class="sticky right-16 top-0 ml-[20vw] mt-[5vh] hidden size-fit pt-[10rem] lg:block">
		<div class="mb-2 size-96">
			<img src={ComingSoonV1} alt="Liber Notarum - Coming Soon" />
		</div>
		<h3 class="text-center text-3xl font-semibold tracking-tight">
			Liber Notarum is launching soon!
		</h3>
	</section>
</div>

<Footer />

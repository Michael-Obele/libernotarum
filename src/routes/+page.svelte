<script>
	import Footer from './Footer.svelte';

	import TextSection from './TextSection.svelte';
	import Logo from '$lib/logos/Logo.svelte';
	import LogoLong from '$lib/logos/Logo-Long.svelte';
	import ComingSoonV1 from '$lib/img/Coming Soon 1.svelte';
	import ComingSoon from '$lib/img/Coming Soon.svelte';

	const relatedWords = [
		'note-taking',
		'organization',
		'collaboration',
		'productivity',
		'markdown',
		'templates',
		'security',
		'cross-platform',
		'digital notebook',
		'knowledge management',
		'open-source',
		'clean interface',
		'robust security',
		'seamless collaboration',
		'customizable notes'
	];
</script>

<svelte:head>
	<title>Liber Notarum</title>
</svelte:head>

<div class="mx-auto w-fit pb-5 pt-10">
	<span class="md:hidden">
		<Logo />
	</span>
	<span class="hidden md:block">
		<LogoLong />
	</span>
</div>

<header class="bg-primary-light p-6 text-center font-semibold text-secondary-light lg:hidden">
	<h3 class="text-4xl">Coming Soon!</h3>
</header>

<main class="relative flex flex-row bg-gray-900 p-6 text-white dark:bg-gray-600">
	<div class="max-w-2xl px-10">
		<section class="my-6 space-y-5 leading-8">
			<h1 class="text-4xl">Liber Notarum</h1>
			<p class="text-lg capitalize">Note-taking, reimagined.</p>
			<h2 class="font-mono text-2xl text-accent1-light md:text-3xl">
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
			<h2 class="text-2xl font-bold text-accent1-light md:text-3xl">
				Your Digital Workspace for Creative Note-Taking
			</h2>
			<p class="md:text-xl">
				Explore a creative, efficient note-taking ecosystem with evolving tools tailored to your
				needs. Experience open-source software freely and without limits.
			</p>
			<!-- <a
			href="/signup"
			class="mt-4 inline-block rounded bg-red-600 px-4 py-2 hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500"
			>Sign up now</a
		> -->
		</section>

		<TextSection title={'synopsis'}>
			Capture, organize, and share your thoughts, ideas, and knowledge with ease. Liber Notarum
			offers a clean, intuitive interface, robust security, and seamless collaboration. Customize
			your notes with Markdown support, templates, and task management. Access your notes from any
			device, ensuring productivity on the go.
		</TextSection>

		<section>
			<h2 class="text-2xl font-bold lowercase text-accent1-light dark:text-gray-200 md:text-3xl">
				related words
			</h2>
			<ul
				class="mt-4 grid list-disc grid-cols-3 gap-x-5 gap-y-3 pl-6 capitalize text-gray-100 dark:text-gray-200"
			>
				{#each relatedWords as word}
					<li>{word}</li>
				{/each}
			</ul>
		</section>

		<TextSection title="technology">
			Utilize a digital notebook that scales with your needs, offering a smooth user experience and
			future-proof features. With minimalistic design and powerful functionality, Liber Notarum
			ensures your notes are always accessible, secure, and well-organized.
		</TextSection>

		<TextSection title="style">
			Enjoy a clean, minimalist design with customizable colors and layouts. Combine and modify
			elements to create a personalized note-taking experience that balances simplicity and
			sophistication.
		</TextSection>

		<TextSection title="open-source license">
			Liber Notarum is completely free for personal and commercial use, with no attribution
			required. Embrace the freedom to use, modify, and share without restrictions. Just don’t
			replicate or redistribute the platform as your own.
		</TextSection>

		<TextSection title="history">
			Liber Notarum, launched in 2024, aims to revolutionize digital note-taking for individuals
			with ADHD or those seeking to manage tasks and notes effortlessly. Inspired by the open-source
			community, the platform is designed to reduce stress and enhance productivity.
		</TextSection>

		<TextSection title="future plans">
			Liber Notarum is a constantly evolving project, with plans to expand its capabilities and
			enhance the user experience. Stay tuned for updates and new features to come.
		</TextSection>

		<!-- <section class="my-6 space-y-5">
			<h2 class="text-2xl font-bold leading-8 text-gray-100 dark:text-gray-200">history</h2>
			<p class="leading-8 text-gray-300 dark:text-gray-700">
				Launched in 2024, Liber Notarum began with the goal of enhancing digital note-taking.
				Inspired by the open-source community, it has quickly grown to be a trusted tool for
				individuals and organizations alike, providing an exceptional note-taking experience across
				various industries and use cases.
			</p>
			<a
			href="/signup"
			class="mt-4 inline-block rounded bg-red-600 px-4 py-2 hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500"
			>Sign up now</a
		>
		</section> -->
	</div>
	<div class="sticky right-16 top-0 ml-[20vw] mt-[10vh] hidden size-fit pt-[10rem] lg:block">
		<div class="mb-20 size-24">
			<ComingSoonV1 />
		</div>
		<h3 class="mt-32 text-3xl font-semibold tracking-tight">Coming Soon!</h3>
	</div>
</main>

<Footer />

<style>
</style>

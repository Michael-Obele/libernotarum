<script>
	import TextSection from './TextSection.svelte';
	import Logo from '$lib/logos/Logo.svelte';
	import LogoLong from '$lib/logos/Logo-Long.svelte';
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

<header class="bg-primary-light p-6 font-semibold text-secondary-light">
	<h1 class="text-4xl">
		Liber Notarum
		<span class="font-mono text-2xl text-accent1-light">
			<span class="text-nowrap font-bold">\ˈliːbər noʊˈtɑːrəm\</span>
		</span>
	</h1>
	<p class="text-lg">Note-taking, reimagined.</p>
</header>

<main class="bg-gray-900 p-6 dark:bg-gray-600">
	<div class="max-w-2xl px-10">
		<section class="my-6">
			<span class="font-mono text-2xl text-accent1-light">
				<span class="text-nowrap font-bold">\ˈliːbər noʊˈtɑːrəm\</span>
			</span>
			<p class="text-accent1-light">
				The Latin term "Liber Notarum" translates to "Book of Notes," representing a digital
				notebook for capturing, organizing, and sharing knowledge.
			</p>
		</section>

		<section class="my-6">
			<h2 class="text-2xl font-bold text-accent1-light">
				Open-source digital notebook for modern note-taking.
			</h2>
			<p class="text-accent1-light">
				A constantly evolving project providing powerful note-taking capabilities with an intuitive
				interface, available completely free and without attribution.
			</p>
			<!-- <a
			href="/signup"
			class="mt-4 inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500"
			>Sign up now</a
		> -->
		</section>

		<TextSection title={'synopsis'}>
			Capture, organize, and share your thoughts, ideas, and knowledge with ease. Liber Notarum
			offers a clean, intuitive interface, robust security, and seamless collaboration. Customize
			your notes with Markdown support, templates, and task management. Access your notes from any
			device, ensuring productivity on the go.
		</TextSection>

		<TextSection title="related words">
			Note-taking, Organization, Collaboration, Productivity, Markdown, Templates, Security,
			Cross-Platform, Digital Notebook, Knowledge Management
		</TextSection>

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
			Launched in 2024, Liber Notarum began with the goal of enhancing digital note-taking. Inspired
			by the open-source community, it has quickly grown to be a trusted tool for individuals and
			organizations alike, providing an exceptional note-taking experience across various industries
			and use cases.
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
			class="mt-4 inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500"
			>Sign up now</a
		>
		</section> -->
	</div>
</main>

<footer class="bg-secondary-light p-6 text-center text-white">
	<!-- <div>
		<a href="https://twitter.com/libernotarum" class="mx-2 inline-block">Twitter</a>
		<a href="https://facebook.com/libernotarum" class="mx-2 inline-block">Facebook</a>
		<a href="https://instagram.com/libernotarum" class="mx-2 inline-block">Instagram</a>
	</div>
	<div class="mt-4">
		<a href="#" class="mx-2 inline-block">Privacy Policy</a>
		<a href="#" class="mx-2 inline-block">Terms of Service</a>
		<a href="#" class="mx-2 inline-block">Contact Us</a>
	</div> -->
	<p class="mt-4">&copy; 2024 Liber Notarum. All rights reserved.</p>
</footer>

<style>
</style>

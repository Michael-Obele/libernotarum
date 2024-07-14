<script>
	import Logo from './Logo.svelte';
</script>

<svelte:head>
	<title>Liber Notarum</title>
</svelte:head>

<div class="mx-auto mb-5 mt-10 w-fit">
	<Logo />
</div>

<header class="bg-blue-500 p-6 text-white">
	<h1 class="text-4xl">
		Liber Notarum
		<span class="font-mono text-gray-800">
			[<span class="font-bold">ˈliː.ber noˈtaː.rum</span>]
		</span>
	</h1>
	<p class="text-lg">Note-taking, reimagined.</p>
</header>

<main class="p-6">
	<section class="my-6">
		<p class="font-mono text-2xl text-gray-800">
			[<span class="font-bold">ˈliː.ber noˈtaː.rum</span>]
		</p>
		<p class="text-gray-700">
			The Latin term "Liber Notarum" translates to "Book of Notes," representing a digital notebook
			for capturing, organizing, and sharing knowledge.
		</p>
	</section>

	<section class="my-6">
		<h2 class="text-2xl font-bold text-gray-800">
			Open-source digital notebook for modern note-taking.
		</h2>
		<p class="text-gray-700">
			A constantly evolving project providing powerful note-taking capabilities with an intuitive
			interface, available completely free and without attribution.
		</p>
		<a
			href="/signup"
			class="mt-4 inline-block rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
			>Sign up now</a
		>
	</section>

	<section class="my-6">
		<h2 class="text-2xl font-bold text-gray-800">synopsis</h2>
		<p class="text-gray-700">
			Capture, organize, and share your thoughts, ideas, and knowledge with ease. Liber Notarum
			offers a clean, intuitive interface, robust security, and seamless collaboration. Customize
			your notes with Markdown support, templates, and task management. Access your notes from any
			device, ensuring productivity on the go.
		</p>
	</section>

	<section class="my-6">
		<h2 class="text-2xl font-bold text-gray-800">related words</h2>
		<p class="text-gray-700">
			Note-taking, Organization, Collaboration, Productivity, Markdown, Templates, Security,
			Cross-Platform, Digital Notebook, Knowledge Management
		</p>
	</section>

	<section class="my-6">
		<h2 class="text-2xl font-bold text-gray-800">technology</h2>
		<p class="text-gray-700">
			Utilize a digital notebook that scales with your needs, offering a smooth user experience and
			future-proof features. With minimalistic design and powerful functionality, Liber Notarum
			ensures your notes are always accessible, secure, and well-organized.
		</p>
	</section>

	<section class="my-6">
		<h2 class="text-2xl font-bold text-gray-800">style</h2>
		<p class="text-gray-700">
			Enjoy a clean, minimalist design with customizable colors and layouts. Combine and modify
			elements to create a personalized note-taking experience that balances simplicity and
			sophistication.
		</p>
	</section>

	<section class="my-6">
		<h2 class="text-2xl font-bold text-gray-800">open-source license</h2>
		<p class="text-gray-700">
			Liber Notarum is completely free for personal and commercial use, with no attribution
			required. Embrace the freedom to use, modify, and share without restrictions. Just don’t
			replicate or redistribute the platform as your own.
		</p>
	</section>

	<section class="my-6">
		<h2 class="text-2xl font-bold text-gray-800">history</h2>
		<p class="text-gray-700">
			Launched in 2024, Liber Notarum began with the goal of enhancing digital note-taking. Inspired
			by the open-source community, it has quickly grown to be a trusted tool for individuals and
			organizations alike, providing an exceptional note-taking experience across various industries
			and use cases.
		</p>
		<a
			href="/signup"
			class="mt-4 inline-block rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
			>Sign up now</a
		>
	</section>
</main>

<footer class="bg-gray-800 p-6 text-center text-white">
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

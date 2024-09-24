<script>
	import { Github, Twitter } from 'lucide-svelte';
</script>

<footer class="bg-gray-100 p-6 text-center text-gray-800 dark:bg-gray-900 dark:text-white">
	<div class="mx-auto flex justify-center">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
			<div>
				<h3 class="mb-4 text-lg font-semibold">Liber Notarum</h3>
				<p class="text-sm">A free and open-source digital notebook for modern note-taking.</p>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
				<ul class="space-y-2">
					<li>
						<a href="/" class="text-sm hover:underline">Home</a>
					</li>
					<li>
						<a href="/app" class="text-sm hover:underline">App</a>
					</li>
					<li>
						<a href="/faq" class="text-sm hover:underline">FAQ</a>
					</li>
					<li>
						<a href="/about" class="text-sm hover:underline">About</a>
					</li>
				</ul>
			</div>
			<!-- Legal -->
			<!-- <div>
				<h3 class="mb-4 text-lg font-semibold">Legal</h3>
				<ul class="space-y-2">
					<li>
						<a href="#" class="text-sm hover:underline">Privacy Policy</a>
					</li>
					<li>
						<a href="#" class="text-sm hover:underline">Terms of Service</a>
					</li>
				</ul>
			</div> -->
			<!-- End of Legal -->
			<div class="flex flex-col space-x-4">
				<h3 class="mb-4 text-lg font-semibold">Connect</h3>
				<div class="flex justify-center space-x-4">
					<a href="https://x.com/Dev_Obele" target="_blank" rel="noopener noreferrer">
						<span class="sr-only">Twitter</span>
						<Twitter class="h-6 w-6 hover:fill-black dark:hover:fill-white" />
					</a>
					<a
						href="https://github.com/Michael-Obele/libernotarum"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="sr-only">GitHub</span>
						<Github class="h-6 w-6 hover:fill-black dark:hover:fill-white" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<p class="mt-8 text-sm">&copy; 2024 Liber Notarum. All rights reserved.</p>
</footer>

<style>
</style>

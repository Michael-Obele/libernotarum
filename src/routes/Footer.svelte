<script>
	import { Github, Twitter, BookOpen, PenLine, MessageCircle } from 'lucide-svelte';
	import { navItems } from '$lib';
	import Logo from '$lib/logos/Logo.svelte';
</script>

<footer class="border-t border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div>
				<div class="flex flex-col items-center justify-center lg:justify-start">
					<p class="text-xl font-bold text-primary">Liber Notarum</p>
					<p class="mt-4 max-w-md text-center text-sm text-muted-foreground lg:text-left">
						Transform your thoughts into beautifully organized notes with our modern, powerful markdown editor.
					</p>
				</div> 
				<div class="mt-6 flex justify-center gap-4 lg:justify-start">
					<a
						href="https://x.com/Dev_Obele"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full border border-primary/10 p-2 text-primary transition-colors hover:bg-primary/5"
					>
						<span class="sr-only">Twitter</span>
						<Twitter class="h-5 w-5" />
					</a>
					<a
						href="https://github.com/Michael-Obele/libernotarum"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full border border-primary/10 p-2 text-primary transition-colors hover:bg-primary/5"
					>
						<span class="sr-only">GitHub</span>
						<Github class="h-5 w-5" />
					</a>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
				<div class="text-center sm:text-left">
					<p class="text-lg font-medium text-primary">Navigation</p>
					<nav class="mt-4">
						<ul class="space-y-2 text-sm">
							{#each navItems as item}
								<li>
									<a
										href={item.path}
										class="text-muted-foreground transition-colors hover:text-primary"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>

				<div class="text-center sm:text-left">
					<p class="text-lg font-medium text-primary">Features</p>
					<nav class="mt-4">
						<ul class="space-y-2 text-sm">
							<li>
								<a href="/app" class="flex items-center justify-center gap-1.5 text-muted-foreground transition-colors hover:text-primary sm:justify-start">
									<PenLine class="h-4 w-4" />
									<span>Live Editor</span>
								</a>
							</li>
							<li>
								<a href="/docs" class="flex items-center justify-center gap-1.5 text-muted-foreground transition-colors hover:text-primary sm:justify-start">
									<BookOpen class="h-4 w-4" />
									<span>Documentation</span>
								</a>
							</li>
							<li>
								<a href="/faq" class="flex items-center justify-center gap-1.5 text-muted-foreground transition-colors hover:text-primary sm:justify-start">
									<MessageCircle class="h-4 w-4" />
									<span>FAQ</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div class="text-center sm:text-left">
					<p class="text-lg font-medium text-primary">Legal</p>
					<nav class="mt-4">
						<ul class="space-y-2 text-sm">
							<li>
								<a href="/privacy" class="text-muted-foreground transition-colors hover:text-primary">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="/terms" class="text-muted-foreground transition-colors hover:text-primary">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a href="https://www.gnu.org/licenses/gpl-3.0" class="text-muted-foreground transition-colors hover:text-primary">
									GPL v3 License
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-primary/10 pt-8">
			<div class="text-center text-sm text-muted-foreground">
				<p>
					&copy; 2024 Liber Notarum. Made with ❤️ by <a
						href="https://github.com/Michael-Obele"
						class="text-primary hover:underline">Michael Obele</a
					>
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
</style>

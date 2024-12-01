<script lang="ts">
	import { Github, Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="px-2">
	<Button onclick={toggleMode} type="button" variant="outline" size="icon">
		<Sun class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
		<Moon class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		<span class="sr-only">Toggle theme</span>
	</Button>
	<Button variant="outline" type="button" size="icon">
		<a target="_blank" href="https://github.com/Michael-Obele/libernotarum">
			<span class="sr-only">See GitHub Repo</span>
			<Github class="h-[1.2rem] w-[1.2rem]" />
		</a>
	</Button>
</div>

<script lang="ts">
	import Navbar from '$lib/blocks/Navbar.svelte';
import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ModeWatcher />

<Navbar />

<div class="">
	{@render children?.()}
</div>

<script lang="ts">
	import Navbar from '$lib/blocks/Navbar.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>



{@render children?.()}

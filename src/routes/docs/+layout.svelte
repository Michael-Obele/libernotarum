<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8">
    {@render children()}
</div>
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let markdownTest = '# The Journey starts here ';
	import { Carta, Markdown } from 'carta-md';

	import DOMPurify from 'isomorphic-dompurify';

	const carta = new Carta({
		sanitizer: DOMPurify.sanitize
	});

	let value = '...';
</script>

<h1>The App Page</h1>

{#key value}
	<Markdown {carta} value={markdownTest} />
{/key}

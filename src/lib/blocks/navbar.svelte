<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import {  Menu } from 'lucide-svelte';
	import NavAddOns from './NavAddOns.svelte';

	// Reactive statement to determine if the current route matches the item
	$: isActive = (item: string) => {
		const routeId = $page.url.pathname;
		show = false;
		// Special case for the home page
		if (item === 'Home' && routeId === '/') {
			return true;
		} else {
			// Construct the expected route path for other items
			return routeId === `/${item.toLowerCase()}`;
		}
	};

	$: show = false;

	// No need for a separate href function, use item directly
</script>

<nav class="border-gray-200 bg-white dark:bg-gray-900">
	<div class="flex flex-wrap items-center justify-around p-4">
		<slot>
			<!-- Logo -->
			<a
				href="/"
				class="flex items-center space-x-3 md:order-2 rtl:space-x-reverse {isActive('Home')
					? 'text-red-500 dark:text-red-400'
					: ''}"
				aria-current={isActive('Home') ? 'page' : false}
			>
				<div class="flex text-2xl font-semibold">Liber Notarum</div>
			</a>
			<!-- End of Logo -->

			<div class="flex items-center space-x-3 md:order-3 md:mx-0 md:space-x-0">
				<NavAddOns />
				<Button
					data-collapse-toggle="navbar-user"
					variant="outline"
					type="button"
					size="icon"
					class="inline-flex h-10 w-10 items-center justify-center rounded-lg px-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
					aria-controls="navbar-user"
					on:click={() => (show = !show)}
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>

					<Menu aria-hidden="true" />
				</Button>
			</div>
			<!-- Links -->
			<div
				class={` w-full items-center justify-between md:order-1 md:flex md:w-auto ${show ? 'block' : 'hidden'}`}
				id="navbar-user"
			>
				<ul
					class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse"
				>
					{#each ['Home', 'App', 'FAQ', 'About'] as item}
						<li>
							<a
								href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
								class={`${isActive(item) ? 'block rounded bg-red-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-red-700 md:dark:text-red-500' : 'block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-red-500'}`}
								aria-current={isActive(item) ? 'page' : undefined}>{item}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<!-- End of Links -->
		</slot>
	</div>
</nav>

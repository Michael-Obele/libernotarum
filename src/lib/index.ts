// place files you want to import through the `$lib` alias in this folder.

export function smoothScrollTo(id: string) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

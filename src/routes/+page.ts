import type { PageLoad } from './$types';

export const load = (async () => {
	const relatedWords = [
		'note-taking',
		'organization',
		'collaboration',
		'productivity',
		'markdown',
		'templates',
		'security',
		'cross-platform',
		'digital notebook',
		'knowledge management',
		'open-source',
		'clean interface',
		'robust security',
		'seamless collaboration',
		'customizable notes'
	];

	const sections = [
		{
			title: 'synopsis',
			content:
				'Capture, organize, and share your thoughts, ideas, and knowledge with ease. Liber Notarum offers a clean, intuitive interface, robust security, and seamless collaboration. Customize your notes with Markdown support, templates, and task management. Access your notes from any device, ensuring productivity on the go.'
		},
		{
			title: 'technology',
			content:
				'Utilize a digital notebook that scales with your needs, offering a smooth user experience and future-proof features. With minimalistic design and powerful functionality, Liber Notarum ensures your notes are always accessible, secure, and well-organized.'
		},
		{
			title: 'style',
			content:
				'Enjoy a clean, minimalist design with customizable colors and layouts. Combine and modify elements to create a personalized note-taking experience that balances simplicity and sophistication.'
		},
		{
			title: 'open-source license',
			content:
				'Liber Notarum is completely free for personal and commercial use, with no attribution required. Embrace the freedom to use, modify, and share without restrictions. Just don’t replicate or redistribute the platform as your own.'
		},
		{
			title: 'history',
			content:
				'Liber Notarum, launched in 2024, aims to revolutionize digital note-taking for individuals with ADHD or those seeking to manage tasks and notes effortlessly. Inspired by the open-source community, the platform is designed to reduce stress and enhance productivity.'
		},
		{
			title: 'future plans',
			content:
				'Liber Notarum is a constantly evolving project, with plans to expand its capabilities and enhance the user experience. Stay tuned for updates and new features to come.'
		}
	];

	const LiberNotarumDescription = [
		{
			type: 'paragraph',
			content: `The Latin term <strong class="text-yellow-400 dark:text-yellow-300"
							>"Liber Notarum"</strong
						> translates to <span class="text-yellow-400 dark:text-yellow-300">"Book of Notes"</span>, representing a digital notebook for capturing, organizing, and sharing knowledge.`
		},
		{
			type: 'paragraph',
			content: 'Open-source digital notebook for modern note-taking.'
		},
		{
			type: 'list',
			items: [
				'A constantly evolving project providing powerful <span class="text-yellow-400 dark:text-yellow-300">note-taking capabilities</span> with an intuitive interface.',
				'Available completely free and without attribution.',
				'Provides features like <span class="text-yellow-400 dark:text-yellow-300">Markdown support</span>, <span class="text-yellow-400 dark:text-yellow-300">note templates</span>, and <span class="text-yellow-400 dark:text-yellow-300">task management</span>.',
				'Ensures robust <span class="text-yellow-400 dark:text-yellow-300">security</span> and seamless <span class="text-yellow-400 dark:text-yellow-300">collaboration</span>.'
			]
		}
	];

	return {
		relatedWords,
		sections,
		description: LiberNotarumDescription
	};
}) satisfies PageLoad;

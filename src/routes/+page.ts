import type { PageLoad } from './$types';

export const load = (async () => {
	const relatedWords = [
		'intelligent note-taking',
		'seamless organization',
		'real-time collaboration',
		'enhanced productivity',
		'markdown mastery',
		'smart templates',
		'enterprise security',
		'cross-platform sync',
		'digital workspace',
		'knowledge hub',
		'open-source innovation',
		'modern interface',
		'end-to-end encryption',
		'team collaboration',
		'AI-powered notes'
	];

	const sections = [
		{
			title: 'Transform Your Note-Taking',
			content:
				'Experience the future of note-taking with Liber Notarum. Our platform combines the simplicity of markdown with the power of modern technology, creating a seamless environment where your ideas can flourish. With real-time collaboration, smart organization, and powerful search capabilities, your knowledge is always at your fingertips.'
		},
		{
			title: 'Built for the Modern Age',
			content:
				'Powered by cutting-edge technology, Liber Notarum is designed for the way you work today. Whether you\'re a developer documenting code, a researcher organizing findings, or a team collaborating on projects, our platform adapts to your workflow with intelligent features and lightning-fast performance.'
		},
		{
			title: 'Beautiful by Design',
			content:
				'Immerse yourself in a thoughtfully crafted interface that combines aesthetics with functionality. With support for both light and dark modes, customizable themes, and a clean, distraction-free writing environment, Liber Notarum helps you focus on what matters most - your content.'
		},
		{
			title: 'Open Source Freedom',
			content:
				'Join a thriving community of innovators. Liber Notarum is proudly open source, giving you the freedom to use, modify, and enhance the platform. Contribute to the future of note-taking while maintaining complete control over your data and workflow.'
		},
		{
			title: 'Born from Necessity',
			content:
				'Created in 2024, Liber Notarum emerged from a vision to make note-taking more accessible and efficient for everyone, especially those with ADHD. By combining intelligent organization with intuitive design, we\'re making knowledge management stress-free and enjoyable.'
		},
		{
			title: 'Continuous Innovation',
			content:
				'The future of Liber Notarum is bright and dynamic. With upcoming features like AI-powered insights, advanced collaboration tools, and enhanced customization options, we\'re constantly evolving to meet your needs. Be part of our journey in revolutionizing digital note-taking.'
		}
	];

	const description = [
		{
			type: 'paragraph',
			content:
				'Welcome to the future of note-taking. Liber Notarum is more than just a digital notebook - it\'s your personal knowledge hub where ideas come to life.'
		},
		{
			type: 'paragraph',
			content:
				'Built for modern professionals, researchers, and creatives, our platform combines powerful features with elegant simplicity:'
		},
		{
			type: 'list',
			items: [
				'🚀 Lightning-fast markdown editor with real-time preview',
				'🔍 Intelligent organization with smart tags and folders',
				'🤝 Seamless collaboration tools for team productivity',
				'🎨 Beautiful, customizable interface with dark mode support',
				'🔒 Enterprise-grade security with end-to-end encryption',
				'💡 AI-powered insights and smart suggestions'
			]
		}
	];

	return {
		description,
		sections,
		relatedWords
	};
}) satisfies PageLoad;

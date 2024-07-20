import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {

		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			}
		},
		extend: {
			screens: {
				'2xl': '1400px',
				'xs': '420px'
			},
			backgroundColor: {
				'primary-light': '#E23E57',
				'secondary-light': '#2C2C34',
				'accent1-light': '#FFBE0B',
				'accent2-light': '#4CAF50',
				'primary-dark': '#E23E57',
				'secondary-dark': '#F5F5F5',
				'accent1-dark': '#4285F4',
				'accent2-dark': '#FF6F61'
			},
			textColor: {
				'primary-light': '#E23E57',
				'secondary-light': '#2C2C34',
				'accent1-light': '#FFBE0B',
				'accent2-light': '#4CAF50',
				'primary-dark': '#E23E57',
				'secondary-dark': '#F5F5F5',
				'accent1-dark': '#4285F4',
				'accent2-dark': '#FF6F61'
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;

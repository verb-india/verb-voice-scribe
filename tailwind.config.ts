import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				verb: {
					orange: '#FFB74D',
					'orange-light': '#FFCC80',
					cream: '#FFF8E1',
					beige: '#F5F5DC',
					'orange-dark': '#FF9800',
					'orange-very-light': '#FFF3E0',
					'orange-yellow-gradient': 'linear-gradient(135deg, #FF6B35 0%, #F7931E 25%, #FFD700 50%, #FFA500 75%, #FF8C00 100%)',
					'orange-yellow-diagonal': 'linear-gradient(45deg, #FF6B35 0%, #F7931E 25%, #FFD700 50%, #FFA500 75%, #FF8C00 100%)'
				}
			},
			backgroundImage: {
				'verb-gradient': 'radial-gradient(ellipse at center, #FFDBCC 0%, #FFF2E6 30%, #FFFFFF 70%)',
				'verb-gradient-light': 'radial-gradient(ellipse at center, #FFF2E6 0%, #FFFFFF 60%)',
				'verb-gradient-reverse': 'radial-gradient(ellipse at center, #FFCC99 0%, #FFDBCC 25%, #FFF2E6 50%, #FFFFFF 80%)',
				'verb-diagonal-gradient': 'radial-gradient(ellipse at center, #FFCC99 0%, #FFDBCC 20%, #FFF2E6 40%, #FFFFFF 70%)',
				'verb-diagonal-gradient-reverse': 'radial-gradient(ellipse at center, #FFCC99 0%, #FFDBCC 20%, #FFF2E6 40%, #FFFFFF 70%)',
				'verb-subtle-gradient': 'radial-gradient(ellipse at center, #FFE6D3 0%, #FFF2E6 40%, #FFFFFF 80%)',
				'verb-orange-yellow-gradient': 'radial-gradient(ellipse at center, #FFCC99 0%, #FFDBCC 15%, #FFF2E6 35%, #FFFFFF 65%)',
				'verb-orange-yellow-diagonal': 'radial-gradient(ellipse at center, #FFCC99 0%, #FFDBCC 15%, #FFF2E6 35%, #FFFFFF 65%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

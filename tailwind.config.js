/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
    darkMode: 'media',
    theme: {
        colors: {
            white: '#FFFFFF',
            black: '#000000',
            error: '#F00843',
            gray: {
                light: '#f7f7f8',
                DEFAULT: '#b3b3b3',
                dark: '#464555',
            },
            accent: {
                DEFAULT: '#426cff',
                hover: '#3c68e5',
            },
            background: '#4d7cff',
            card: {
                DEFAULT: '#F9F8FF',
                dark: '#323233',
            },
            field: {
                DEFAULT: '#ecebf2',
                dark: '#575759',
            },
            github: '#191717',
        },
        fontFamily: {
            sans: ['Open Sans', 'system-ui', 'Helvetica Neue', 'sans-serif'],
        },
        extend: {
            boxShadow: {
                nav: '0 25px 50px -12px rgba(77, 124, 255, 0.2), 0 10px 10px -5px rgba(77, 124, 255, 0.4)',
                'nav-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
            },
            scale: {
                102: '1.02',
            },
            transitionDuration: {
                50: '50ms',
            },
            width: {
                '90vw': '90vw',
            },
            maxWidth: {
                '95vw': '95vw',
                '840px': '840px',
            },
            screens: {
                dark: { raw: '(prefers-color-scheme: dark)' },
            },
        },
    },
    variants: {
        extend: {
            boxShadow: ['dark'],
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const transitionUtils = {
                '.quick-transition': {
                    'transition-property':
                        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
                    'transition-duration': '150ms',
                    'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
                },
            }

            addUtilities(transitionUtils)
        }),
    ],
}

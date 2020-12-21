module.exports = {
    purge: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
    darkMode: false,
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
            card: '#F9F8FF',
        },
        fontFamily: {
            sans: ['Open Sans', 'system-ui', 'Helvetica Neue', 'sans-serif'],
        },
        extend: {
            boxShadow: {
                nav: '0 25px 50px -12px rgba(77, 124, 255, 0.2), 0 10px 10px -5px rgba(77, 124, 255, 0.4)',
            },
            scale: {
                102: '1.02',
            },
            transitionDuration: {
                50: '50ms',
            },
        },
    },
    variants: {},
    plugins: [],
}

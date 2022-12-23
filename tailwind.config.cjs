/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'soft-brown': '#EAEAEA',
                'gray-arrow': '#8D8D8D',
                'soft-gray': '#626262',
                'dark-100': '#232323',
                'border-gray': '#C4C4C4',
                'btn-green': '#208298',
                'text-error': '#F15524',
                'link-bg': '#1289AE',
            },
            backgroundImage: {
                shadow: "url('/assets/start-hover.png')",
            },
            fontFamily: {
                arial: ['Arial'],
            },
        },
    },
    plugins: [],
}

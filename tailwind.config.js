module.exports = {
    corePlugins: {
        container: false,
    },
    purge: ['./components/**/*.js', './pages/**/*.js'],
    theme: {
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1.3125rem',
            'lg': '1.40625rem',
            'xl': '2.5rem',
            '2xl': '3.4375rem',
        },
        colors: {
            blue: '#114B5F',
            lightblue: '#F2F9FD',
            green: '#1A936F',
            red: '#D1495B',
            yellow: '#EDAE49',
            gray: '#E5E5E5',
            white: '#FFFFFF',
        },
        extend: {},
    },
    variants: {},
    plugins: [require('tailwind-bootstrap-grid')({
        gridGutterWidth: '20px'
    })],
}
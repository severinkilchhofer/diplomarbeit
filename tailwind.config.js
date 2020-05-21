module.exports = {
    corePlugins: {
        container: false,
    },
    purge: ['./components/**/*.js', './pages/**/*.js'],
    theme: {
        fontSize: {
            xs: ['.75rem', '1.5rem'],
            sm: ['.875rem', '1.5rem'],
            base: ['1.2rem', '1.75rem'],
            lg: ['1.5rem', '2.25rem'],
            lgr: ['1.75rem', '3rem'],
            xl: ['2.5rem', '4rem'],
            xxl: ['3.4375rem', '4rem'],
        },
        colors: {
            blue: '#114B5F',
            lightblue: '#F2F9FD',
            green: '#1A936F',
            red: '#D1495B',
            yellow: '#EDAE49',
            gray: '#E5E5E5',
            white: '#FFFFFF',
            black: '#000000',
            transparent: 'transparent',
            rgreen: '#A4E24D',
        },
        extend: {},
    },
    variants: {},
    plugins: [require('tailwind-bootstrap-grid')({
        gridGutterWidth: '20px'
    })],
}
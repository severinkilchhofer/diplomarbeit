module.exports = {
    corePlugins: {
        container: false,
    },
    purge: ['./components/**/*.js', './pages/**/*.js'],
    theme: {
        fontSize: {
            xs: ['.75rem', '1.5rem'],
            sm: ['.875rem', '1.5rem'],
            baseMobile: ['1rem', '1.5rem'],
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
            r1: '#D00000',
            r2: '#DC2F02',
            r3: '#E85D04',
            r4: '#F48C06',
            r5: '#FAA307',
            r6: '#FFBA08',
            r7: '#FFE33F',
            r8: '#A4E24D',
            r9: '#7BC423',
            r10: '#18920D',
        },
        extend: {},
    },
    variants: {},
    plugins: [require('tailwind-bootstrap-grid')({
        gridGutterWidth: '20px'
    })],
}
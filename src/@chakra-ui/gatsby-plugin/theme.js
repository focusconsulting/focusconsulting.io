import { extendTheme } from '@chakra-ui/react'
const overrides = {
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    colors: {
        primary: '#C53030',
        sectionHero: {
            dark: '#091741',
        },
        icon: {
            red: '#E53E3E',
        },
        blue: {
            800: '#102871',
        },
    },
    space: {
        11: '48px',
        section: {
            md: '80px',
            lg: '112px',
        },
    },
}

const theme = extendTheme(overrides)
export default theme

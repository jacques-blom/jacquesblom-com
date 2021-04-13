const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            backgroundImage: (theme) => {
                const { blue, purple } = theme().colors

                return {
                    gradient: `linear-gradient(to top right, ${blue["700"]}, ${purple["600"]})`,
                    wave: `url('/wavePattern.svg'), linear-gradient(to top right, ${blue["700"]}, ${purple["600"]})`,
                }
            },
        },
        colors: {
            ...defaultTheme.colors,
            gray: colors.blueGray,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
}

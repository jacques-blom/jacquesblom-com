const defaultTheme = require("tailwindcss/defaultTheme")

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
                    wave: `url('/static/wave.svg'), linear-gradient(to top right, ${blue["700"]}, ${purple["600"]})`,
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
}

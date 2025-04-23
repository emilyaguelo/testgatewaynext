const { Certificate } = require("crypto");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./features/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "1.5rem",
                lg: "2rem"
            }
        },
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                "2xs": ["0.6875rem", "0.875rem"],
            },
            screens: { 
                "hover-hover": { raw: "(hover: hover)" },
                'xs': '365px',
                ...defaultTheme.screens,
            },
            keyframes: {
                "see-more": {
                    "0%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 0 rgba(229, 62, 62, 1)"
                    },
                    "70%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 15px rgba(229, 62, 62, 0)"
                    },
                    "100%": {
                        transform: "scale(1)"
                    }
                },
            },
            animation: {
                "pulse-custom": "see-more 1.5s infinite",
            }
        },
    },
    plugins: [],
};

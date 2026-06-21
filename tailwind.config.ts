import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["var(--font-quicksand)", ...fontFamily.sans],
        header: ["var(--font-unbounded)", ...fontFamily.sans],
      },
      colors: {
        gray: "#ecebeb",
        lightGray: "#fafafa",
        darkGray: "#737373", // A softer gray for text
        darkerGray: "#121212",
        accent: "#3b82f6", // A subtle blue accent for hover states
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

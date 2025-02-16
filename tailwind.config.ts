import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

// orbitron
// gruppo
// monoton
// unbounded
// michroma

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
        michroma: ["Michroma", ...fontFamily.sans],
        secondary: ["Montserrat", ...fontFamily.sans],
        header: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        gray: "#ecebeb",
        lightGray: "#F5F7F8",
        darkGray: "#45474B",
        darkerGray: "#1e1e1e",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

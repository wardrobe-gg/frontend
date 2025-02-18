import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mc: ["Minecraft", "sans-serif"],
        "blackentina-i": ["Blackentina", "sans-serif"],
        basically: ["Basically", "sans-serif"],
      },
      colors: {
        custom: {
          black: "#111113",
          "gray-black": "#28282E",
          gray: "#41414A",
          "gray-light": "#8D9096",
          white: "#FFFFFF",
          pink: "#FF3475",
          "pink-hover": "#D81E5A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

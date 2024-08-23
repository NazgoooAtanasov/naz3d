import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        warpfiend: {
          DEFAULT: "#6e6e77",
        },
        cultured: {
          DEFAULT: "#f4f4f5",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

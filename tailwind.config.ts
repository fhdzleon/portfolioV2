import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        bgDark: "#1a1818",
        bgLight: "#d9d9d9",
        bgPicture: "#f6f6f6",
        bodyLight: "#ededed",
      },
    },
  },
  plugins: [],
} satisfies Config;

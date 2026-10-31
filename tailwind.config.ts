import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          softRed: "hsl(var(--primary-softRed))",
          lightGrayishBlue: "hsl(var(--primary-lightGrayishBlue))",
          paleRed: "hsl(var(--primary-paleRed))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          grayishBlue: "hsl(var(--neutral-grayishBlue))",
          lightGray: "hsl(var(--neutral-lightGray))",
          veryLightGray: "hsl(var(--neutral-veryLightGray))",
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
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#1e1b4b", // Twilight Navy
        "contrast-gold": "#FFD700", // Contrast Gold
        "royal-saffron": "#FF9933", // India Saffron
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "purple-glow": "radial-gradient(circle at center, #4A148C 0%, #310A74 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      animation: {
        "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
      },
      keyframes: {
        "text-shimmer": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

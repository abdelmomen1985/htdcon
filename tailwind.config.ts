
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./o-src/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rightLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
        },
        spinInPlace: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotateX: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
      },
      animation: {
        upDown: "upDown 3s ease-in-out infinite",
        rightLeft: "rightLeft 3s ease-in-out infinite",
        spinInPlace: "spinInPlace 5s linear infinite",
        rotateX: "rotateX 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

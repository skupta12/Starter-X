import { nextui } from "@nextui-org/react"
import type { Config } from "tailwindcss"

const config = {
  content: [
    './sections/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
    extend: {
      colors: {
        "background-100": "#EFF0F0",
        "background-200": "#F8F8F7",
        "primary-100": "#1F1F1F",
        "primary-200": "#383838", // gray-600
        "neutral-100": "#F1A280",
        "neutral-200": "#E4D275",
        "neutral-300": "#CEEAE8",
        "neutral-400": "#1F1F1F"
      },
    },
  },
  plugins: [nextui({
    // layout: {
    //   disabledOpacity
    // }
  })],
  screens: {
    'xs': '380px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1360px',
  }
  // plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
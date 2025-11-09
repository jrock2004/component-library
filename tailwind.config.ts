import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class", // ✅ or: ["class", ".dark"]
  theme: {},
  plugins: [],
} satisfies Config;

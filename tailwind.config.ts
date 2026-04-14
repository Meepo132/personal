import type { Config } from "tailwindcss";

const config: Config = {
  // Dark mode ကို class နာမည်နဲ့ ထိန်းချုပ်ဖို့ အသေအချာ ကြေညာတာပါ
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // globals.css ထဲက variables တွေနဲ့ ချိတ်ဆက်ထားတာပါ
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
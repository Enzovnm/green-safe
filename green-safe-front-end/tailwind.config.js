/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
      },
      backgroundImage: {
        "hero-pattern": "url(./src/assets/hero.jpg)",
      },
      height: {
        hero: "calc(100vh - 5.5869125rem)",
      },
    },
  },
  plugins: [],
};

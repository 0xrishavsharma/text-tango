/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        textColor: "var(--textColor)",
        softBg: "var(--softBg)",
        softTextColor: "var(--softTextColor)",
        softestTextColor: "var(--softestTextColor)",
      },
    },
    screens: {
      xxs: "348px",
      xs: "380px",
      sm: "484px",
      ms: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

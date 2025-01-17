/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        BricolageGrotesque: ["BricolageGrotesque"],
      },
      colors: {
        primary: "#be185d",
      },
    },
  },
};

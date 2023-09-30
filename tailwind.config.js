/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    gridTemplateColumns: {
      '2': 'repeat(2, minmax(256px, 1fr))',
  },
  plugins: [],
}
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#17b9d4",
          secondary: "#19bc9b",
          accent: "#dc2625",
          neutral: "#343434",
          "base-100": "#ffffff",
        },
      },
      "light",
      "synthwave",
  ],
  },
}

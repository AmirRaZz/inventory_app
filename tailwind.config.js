/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add any theme extensions here
    },
  },
  plugins: [
    // The forms plugin can be configured with options
    require("@tailwindcss/forms")({
      // Use the 'class' strategy so styles are applied only to elements with form-* classes
      strategy: "class",
    }),
  ],
};

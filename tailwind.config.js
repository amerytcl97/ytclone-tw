/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "respect-header": "calc(100vh - 56px)",
        "respect-sidebar-collapse": "5rem",
      },
      width: {
        "respect-sidebar": "calc(100% - 15rem)",
        "respect-sidebar-collapse": "5rem",
      },
      margin: {
        "respect-sidebar": "15rem",
        "respect-sidebar-collapse": "5rem",
      },
      borderRadius: {
        inherit: "inherit",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};

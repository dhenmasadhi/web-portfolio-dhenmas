module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "about-bg": "url('/src/assets/bg-about.png')",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};

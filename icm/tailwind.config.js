// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        darkBlue: "#000b18",
        midBlue: "#00172D",
        onHoverColor: "rgba(203, 203, 203, 0.2)",
      }),
    },
  },
  plugins: [],
};

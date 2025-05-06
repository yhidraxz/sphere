// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        darkBlue: "#000b18",
        navy: "#00172D",
        lightBlue: "#4169E1",
        skyBlue: "#00BFFF",
        onHoverColor: "rgba(203, 203, 203, 0.2)",
      }),
    },
  },
  plugins: [],
};

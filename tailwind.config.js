module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      primary: "#545FC2",
      "primary-dark": "#ECEEFF",
      "border-color": "#ececec",
      gutter: "#e7e9ef",
      white: "#fff",
    },
    fontSize: {
      15: "15px",
    },
    width: {
      82: "22rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

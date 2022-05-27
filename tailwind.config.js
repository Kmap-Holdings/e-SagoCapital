const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./*.html", "./public/js/*.js"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 1024px) { ... }

      xl: "1140px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "theme-color": "#E83447",
        "esago-color": "#9d1d4c",
        "border-color": "#E8E8E8",
        "body-color": "#747E88",
        "heading-color": "#162447",
        shadow: "#9D6A6A",
      },
      transitionDelay: {
        400: "400ms",
        600: "600ms",
      },
      spacing: {
        110: "110px",
        120: "120px",
        130: "130px",
        140: "140px",
        150: "150px",
        160: "160px",
        170: "170px",
        180: "180px",
        190: "190px",
        200: "200px",
        260: "260px",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

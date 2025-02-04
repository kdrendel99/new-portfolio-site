import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx, html}"],
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.tsx",
    ],
  },
  theme: {
    colors: {
      darkGrey: "#898989",
      grey: "#999999",
      // accentColor: '#B8A07E',
      accentColor: "#6F7259",
      accentColor2: "#434535",
      white: "#ffffff",
      offwhite: "#f7f7f7",
      darkModeBg: "#1d1d1d",
      black: "#000000",
      mutedBlack: "#212121",
      softBlack: "#292727",
      offBlack: "#1d1d1d",
    },
    borderWidth: {
      "10": "10px",
      "20": "20px",
    },
    letterSpacing: {
      "kd-wide": ".2em",
      "kd-wider": ".3em",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-img": "url('/img/ak-6.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nwt: ["nwt", "serif"],
        cowboy: ["cowboy", "serif"],
        ranch: ["ranch", "serif"],
        bookletter: ["var(--font-bookletter)"],
      },
    },
  },
  plugins: [],
};
export default config;

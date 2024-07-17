/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{png, jpg, pdf}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "redTitle": "#ff5757",
        "yellowTheme": "#ffde59",
        "Javascript": "#C2BA5B",
        "Leaflet": "#AFDB60",
        "Cordova": "#424242",
        "Twig": "#80A11D",
        "Php": "#7377AD",
        "Symfony": "#000000",
        "Angular": "#D6002F",
        "Sql": "#D36F2C",
        "React-Native": "#65AFBF",
        "ExpressJs": "#373737",
        "NodeJs": "#5EAC46",
        "Firebase": "#F7C427",
        "NextJs": "#303030",
        "React": "#65AFBF",
        "Redux": "#6D3FB4",
        "Tailwind": "#42A4AD",
        "ThreeJs": "#303030",
        "3DsMax": "#014E4E",
      },
    },
  },
  plugins: [],
};

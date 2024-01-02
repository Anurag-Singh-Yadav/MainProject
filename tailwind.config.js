/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primarybtn: "#7043e3",
        highBlue: "#012169",
        mediumBlue: "#003887",
        lowBlue: "#009CDE",
        dimWhite: "#F6F7F8",
        dsa: "#2A9D8F",
        light1: "#e3dbfa",
        light2: "#fbe2f4",
        light3: "#ffe1cc",
        light4: "#d4f6ed",
        light5:"#085467",
        light6:"#AFA7BB",
        light7:"#F4C0B3",
      },
    },
    plugins: [],
  },
};

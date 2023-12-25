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
        webDevelopment: "#3D405B",
        competitive: "#F4A261",
        appDevelopment: "#287271",
        machineLearning: "#264653",
        dataScience: "#E76F51",
        whitetext: "F4F1DE",
      },
    },
    plugins: [],
  },
};

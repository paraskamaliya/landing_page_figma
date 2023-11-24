/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Black: "#263238",
        D_grey:"#4D4D4D",
        Grey:"#717171",
        L_grey:"#89939E",
        Grey_blue:"#ABBED1",
        Silver:"#F5F7FA",
        Primary:"#28CB8B",
        Secondary:"#263238",
        Info:"#2194f3",
        Shade1:"#43A046",
        Shade2:"#388E3B",
        Shade3:"#237D31",
        Shade4:"#1B5E1F",
        Shade5:"#103E13"
      }
    },
  },
  plugins: [
  ]
}
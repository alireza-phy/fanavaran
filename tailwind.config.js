/** @type {import('tailwindcss').Config} */
// Specify the type of the configuration as 'Config' from 'tailwindcss' module
// This comment helps TypeScript understand the structure of the configuration

import plugin from "tailwindcss/plugin"; // Import the 'plugin' function from 'tailwindcss/plugin'

// Define configuration settings
export const content = ["./src/**/*.{js,jsx,html,ts,tsx}"]; // Specify content paths for PurgeCSS
export const theme = {
  // Define theme customization
  fontSize: {
    xxxl: "24px",
    xxl: "20px",
    xl: "18px",
    lg: "16px",
    md: "14px",
    sm: "12px",
    xs: "10px",
  },
  fontFamily: {
    iranSans: ["IranSans"],
  },
  colors: {
    white: "white",
    header: "#e9e9f5",
    menu: "#f0e9f5",
    primary: "#00058a",
    secondary: "#50008a",
    text: {
      primary: "#080142",
      secondary: "#1e0142",
    },
    table: {
      main: "#d9b4c0",
      header: "#e86f86",
      border: "#ad234f",
    },
  },
  extend: {
    borderRadius: {
      sm: "8px",
      md: "10px",
      lg: "14px",
    },
  },
};
export const plugins = [
  // Use the 'plugin' function to add custom base styles
  plugin(function ({ addBase }) {
    addBase({
      h1: {
        color: "black",
        fontSize: "34px",
        lineHeight: "41.15px",
        fontWeight: 700,
      },
    });
  }),
];

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      githubColor:"#1A1A1A",
      youtubeColor:"#EE3939",
      twitterColor:"#43B7E9",
      linkedinColor:"#2D68FF",
      facebookColor:"#2442AC",
      twitchColor:"#EE3FC8",
      codePenColor:"#1A1A1A",
      gitLabColor:"#EB4925",
      hashNodeColor:"#0330D1",
      stackOverflowColor:"#EC7100",
      devtoColor:"#333333",
      freeCodeCampColor:"#302267",
      codeWarsColor:"#8A1A50",
      purple: "#633CFF",
      purpleHover: "#BEADFF",
      lightPurple: "#EFEBFF",
      darkgrey: "#333333",
      grey: "#737373",
      border: "#D9D9D9",
      lightGrey: "#FAFAFA",
      greyShade:"	#dadada",
      red: "#FF3939",
      white:"#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

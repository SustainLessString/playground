/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/images/bg-main-desktop.png')",
        mobile: "url('/images/bg-main-mobile.png')",
      },
      colors: {
        primary: {
          gradientStart: "hsl(249, 99%, 64%)",
          gradientEnd: "hsl(278, 94%, 30%)",
          red: "hsl(0, 100%, 66%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          lightGrayishViolet: "hsl(270, 3%, 87%)",
          darkGrayishViolet: "hsl(279, 6%, 55%)",
          veryDarkViolet: "hsl(278, 68%, 11%)",
        },
      },
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      xl: "1440px",
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    fontFamily: {
      bold: ["Ubuntu-Bold", "sans-serif"],
      medium: ["Ubuntu-Medium", "Georgia"],
      regular: ["Ubuntu-Regular", "Helvetica"],
    },
    fontWeight: {
      bold: "700",
      medium: "500",
      regular: "400",
    },
    backgroundImage: {
      desktop: "url('/assets/images/bg-sidebar-desktop.svg')",
      mobile: "url('/assets/images/bg-sidebar-mobile.svg')",
    },
    extend: {
      content: {
        check: "url('/assets/images/icon-checkmark.svg')",
        planArcade: "url('/assets/images/icon-arcade.svg')",
        planAdvanced: "url('/assets/images/icon-advanced.svg')",
        planPro: "url('/assets/images/icon-pro.svg')",
        thankyou: "url('/assets/images/icon-thankyou.svg')",
      },
      colors: {
        primary: {
          marineblue: "hsl(213, 96%, 18%)",
          purplishblue: "hsl(243, 100%, 62%)",
          pastelblue: "hsl(228, 100%, 84%)",
          lightblue: "hsl(206, 94%, 87%)",
          strawberryred: "hsl(354, 84%, 57%)",
        },
        neutral: {
          coolgray: "hsl(231, 11%, 63%)",
          lightgray: "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
};

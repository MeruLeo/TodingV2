import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: {
          base: "#4f7942", // رنگ اصلی
          moss: "#466d3b", // سبز خزه‌ای
          olive: "#3d6134", // سبز زیتونی
          pine: "#34552e", // سبز کاجی
          cedar: "#2b4927", // سبز سدر
          fern: "#233e21", // سبز سرخس
          evergreen: "#1a321a", // سبز همیشه‌سبز
          shade: "#122713", // سبز سایه‌دار
          midnight: "#0a1b0d", // سبز نزدیک به سیاه (شب)
        },
        ash: {
          light: "#b0b0b0", // خاکستری روشن
          silver: "#8c8c8c", // نقره‌ای
          smoke: "#6e6e6e", // خاکستری دود
          charcoal: "#525252", // زغالی
          slate: "#3a3a3a", // خاکستری سنگی
          iron: "#2c2c2c", // خاکستری آهنی
          graphite: "#1f1f1f", // گرافیتی
          dusk: "#131313", // خاکستری تیره (غروب)
          coal: "#0a0a0a", // خاکستری خیلی تیره (زغال)
        },
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
      },
      fontFamily: {
        sfBold: "var(--font-sf-bold)",
        sfMed: "var(--font-sf-med)",
        sfLight: "var(--font-sf-light)",
      },
      backgroundImage: {
        // گرادیان سبز به سیاه جنگلی (طبیعت تاریک)
        "forest-dark":
          "linear-gradient(135deg, #4f7942, #34552e, #233e21, #0a1b0d)",

        // گرادیان سبز به خاکستری (سبز طبیعی به خاکستری)
        "forest-ash":
          "linear-gradient(135deg, #4f7942, #466d3b, #8c8c8c, #0a0a0a)",

        // گرادیان خاکستری صنعتی به شب (از خاکستری روشن به سیاهی شب)
        "ash-dark":
          "linear-gradient(135deg, #b0b0b0, #6e6e6e, #525252, #0a0a0a)",

        // گرادیان سبز زیتونی به خاکستری دودی
        "olive-smoke":
          "linear-gradient(135deg, #3d6134, #466d3b, #6e6e6e, #3a3a3a)",

        // گرادیان سبز همیشه‌سبز به خاکستری آهنی
        "evergreen-iron": "linear-gradient(135deg, #1a321a, #466d3b, #2c2c2c)",
      },
    },
  },
  plugins: [],
};
export default config;

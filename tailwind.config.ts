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
    },
  },
  plugins: [],
};
export default config;

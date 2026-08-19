import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta Principal da Marca
        brand: {
          bg: "#182838",       // Azul escuro do fundo principal
          primary: "#0894B0",  // Azul ciano vibrante (Ações principais / Destaques)
          accent: "#F04820",   // Laranja elétrico (CTA / Alertas de dor)
          light: "#70C0D8",    // Azul claro (Subtítulos, bordas suaves e badges)
          dark: "#067A92",     // Hover e estados ativos do azul primário
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
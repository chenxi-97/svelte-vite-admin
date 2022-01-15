import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["src/**/*.{svelte,html}"],
    exclude: ["node_modules", ".git"],
  },
  theme: {
    extend: {
      /**
       * 参考https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile
       */
      screens: {
        sm: "320px",
        md: "480px",
        lg: "600px",
        xl: "801px",
        "2xl": "1025px",
        "3xl": "1281px",
      }
    }
  },
});

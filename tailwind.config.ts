import type { Config } from "tailwindcss";
import typies from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [typies],
} as Config;

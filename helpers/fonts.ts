import { fonts } from "@/styles/fonts";

export const mainFonts = [
  { key: "font-sans", label: "Sans" },
  { key: "font-serif", label: "Serif" },
  { key: "font-mono", label: "Mono" },
];

console.log({fonts})

export const otherFonts = Object.values(fonts).map((font) =>
  Object.assign({
    key: font.className,
    label: font.style.fontFamily
      .split("'")[1]
      .split("_")
      .slice(0, -1)
      .join(" "),
  }),
);

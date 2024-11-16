import { fonts } from "@/styles/fonts";
import { Font, FontType } from "@/types";

export const mainFonts: FontType[] = [
  { key: "font-sans", value: "font-sans", label: "Sans" },
  { key: "font-serif", value: "font-serif", label: "Serif" },
  { key: "font-mono", value: "font-mono", label: "Mono" },
];

export const otherFonts: FontType[] = Object.values(fonts).map((font) =>
  Object.assign({
    key: font.className,
    value: font.style.fontFamily
      .split("'")[1]
      .split("_")
      .slice(2, -1)
      .join("-")
      .toLowerCase(),
    label: font.style.fontFamily
      .split("'")[1]
      .split("_")
      .slice(0, -1)
      .join(" "),
  }),
);

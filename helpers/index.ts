import { WxH } from "@/types";

export function getWxH({ width, height }: WxH) {
  return width + "x" + height;
}

export function capitalize(name: string) {
  return name
    .split("-")
    .map(
      (word) =>
        word.length >= 3 ? word.charAt(0).toUpperCase() + word.slice(1) : word,
      // word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}

export function dehashHex(hex: string) {
  return hex.slice(1);
}
export function rehashHex(hex: string) {
  return "#" + hex;
}

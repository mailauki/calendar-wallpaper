import { WxH } from "@/types";

export function getWxH({ width, height }: WxH) {
  return width + "x" + height;
}

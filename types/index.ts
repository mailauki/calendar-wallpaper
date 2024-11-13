import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ColorProps {
  bgColor: string[];
  setBgColor: React.Dispatch<React.SetStateAction<string[]>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
}

export type WeekdayStart = "0" | "1";

export type WeekdayLabel = "short" | "long" | "full";

export type WallpaperQuality = "4K" | "QHD" | "FHD" | "HD" | "SD";

export type AspectRatio =
  | "16:9"
  | "9:16"
  // | "5:4"
  // | "4:5"
  // | "7:5"
  // | "5:7"
  // | "4:3"
  // | "3:4"
  // | "5:3"
  // | "3:5"
  // | "3:2"
  // | "2:3"
  | "1:1";

export type WxH = { width: number; height: number };

export type Sizes = {
  [Ratio in AspectRatio]: WxH[];
};

import React, { SVGProps } from "react";
import { CalendarDate } from "@nextui-org/react";

// eslint-disable-next-line no-undef
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface PreviewProps {
  date: CalendarDate;
  bgColor: string[];
  textColor: string;
  weekdayStart: WeekdayStart;
  weekdayLabel: WeekdayLabel;
  weekdayFont: string;
  weekdaySize: number;
  monthLabel: MonthLabel;
  monthFont: string;
  monthSize: number;
  yearLabel: YearLabel;
  wallpaperSize: string;
  ratio: string;
}

export interface DateProps {
  date: CalendarDate;
  setDate: React.Dispatch<React.SetStateAction<CalendarDate>>;
}

export interface Color {
  name: string;
  hex: string;
}
export interface ColorProps {
  bg: Color[];
  text: Color;
}

export interface BgColorProps {
  bgColor: string[];
  setBgColor: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface TextColorProps {
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
}
export interface BgImageProps {
  bgImage?: string;
  setBgImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface WeekdayStartProps {
  weekdayStart: WeekdayStart;
  setWeekdayStart: React.Dispatch<React.SetStateAction<WeekdayStart>>;
}
export interface WeekdayLabelProps {
  weekdayLabel: WeekdayLabel;
  setWeekdayLabel: React.Dispatch<React.SetStateAction<WeekdayLabel>>;
}
export interface WeekdayFontProps {
  weekdayFont: string;
  setWeekdayFont: React.Dispatch<React.SetStateAction<string>>;
}
export interface WeekdaySizeProps {
  weekdaySize: number;
  setWeekdaySize: React.Dispatch<React.SetStateAction<number>>;
}

export interface MonthLabelProps {
  monthLabel: MonthLabel;
  setMonthLabel: React.Dispatch<React.SetStateAction<MonthLabel>>;
}
export interface MonthFontProps {
  monthFont: string;
  setMonthFont: React.Dispatch<React.SetStateAction<string>>;
}
export interface MonthSizeProps {
  monthSize: number;
  setMonthSize: React.Dispatch<React.SetStateAction<number>>;
}

export type ColorParams = "bg" | "text";
export type WeekdayParams = "start" | "week-label" | "week-font" | "week-size";
export type MonthParams = "month-label" | "month-font" | "month-size";
export type YearParams = "year-label";
export type WallpaperParams = "ratio" | "size";
export type QueryParams =
  | "date"
  | ColorParams
  | WeekdayParams
  | MonthParams
  | YearParams
  | WallpaperParams;

export type WeekdayStart = "0" | "1";

export type WeekdayLabel = "long" | "short" | "narrow";
export type MonthLabel = "numeric" | "2-digit" | "long" | "short" | "narrow";
export type YearLabel = "show" | "hide";

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

export type Font = "Sans" | "Serif" | "Mono";

export type FontType = { key: string; value: string; label: Font };

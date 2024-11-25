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
  weekdayStyle: WeekdayStyle;
  weekdayFont: string;
  weekdaySize: number;
  weekdayLabel: LabelVisibility;
  nonMonthDays: LabelVisibility;
  monthStyle: MonthStyle;
  monthLabel: LabelVisibility;
  monthFont: string;
  monthSize: number;
  yearLabel: LabelVisibility;
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
  // bg: Color[];
  // text: Color;
  bg: string[];
  text: string;
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
export interface WeekdayStyleProps {
  weekdayStyle: WeekdayStyle;
  setWeekdayStyle: React.Dispatch<React.SetStateAction<WeekdayStyle>>;
}
export interface WeekdayFontProps {
  weekdayFont: string;
  setWeekdayFont: React.Dispatch<React.SetStateAction<string>>;
}
export interface WeekdaySizeProps {
  weekdaySize: number;
  setWeekdaySize: React.Dispatch<React.SetStateAction<number>>;
}
export interface WeekdayLabelProps {
  weekdayLabel: LabelVisibility;
  setWeekdayLabel: React.Dispatch<React.SetStateAction<LabelVisibility>>;
}
export interface NonMonthDaysProps {
  nonMonthDays: LabelVisibility;
  setNonMonthDays: React.Dispatch<React.SetStateAction<LabelVisibility>>;
}

export interface MonthStyleProps {
  monthStyle: MonthStyle;
  setMonthStyle: React.Dispatch<React.SetStateAction<MonthStyle>>;
}
export interface MonthFontProps {
  monthFont: string;
  setMonthFont: React.Dispatch<React.SetStateAction<string>>;
}
export interface MonthSizeProps {
  monthSize: number;
  setMonthSize: React.Dispatch<React.SetStateAction<number>>;
}

export interface LabelVisibilityProps {
  monthLabel: LabelVisibility;
  setMonthLabel: React.Dispatch<React.SetStateAction<LabelVisibility>>;
  yearLabel: LabelVisibility;
  setYearLabel: React.Dispatch<React.SetStateAction<LabelVisibility>>;
}

export type ColorParams = "bg" | "text";
export type WeekdayParams =
  | "week-start"
  | "week-style"
  | "week-font"
  | "week-size"
  | "week-label"
  | "non-days";
export type MonthParams =
  | "month-style"
  | "month-font"
  | "month-size"
  | "month-label";
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

export type WeekdayStyle = "long" | "short" | "narrow";
export type MonthStyle = "numeric" | "2-digit" | "long" | "short" | "narrow";
export type LabelVisibility = "show" | "hide";

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

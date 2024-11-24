import { DateFormatter } from "@internationalized/date";

import { LabelVisibility, MonthStyle, WeekdayStyle } from "@/types";

export function formatter({
  weekdayStyle,
  monthStyle,
  monthLabel,
  yearLabel,
}: {
  weekdayStyle?: WeekdayStyle;
  monthStyle?: MonthStyle;
  monthLabel?: LabelVisibility;
  yearLabel?: LabelVisibility;
}) {
  const monthYear = new DateFormatter("en-US", {
    month: monthStyle || "long",
    year: "numeric",
  });
  const month = new DateFormatter("en-US", {
    month: monthStyle || "long",
  });
  const weekday = new DateFormatter("en-US", {
    weekday: weekdayStyle,
  });
  const year = new DateFormatter("en-US", {
    year: "numeric",
  });

  if (weekdayStyle) {
    return weekday;
  } else {
    if (yearLabel == "show" && monthLabel == "show") {
      return monthYear;
    } else if (yearLabel == "hide" && monthLabel == "show") {
      return month;
    } else if (yearLabel == "show" && monthLabel == "hide") {
      return year;
    } else {
      return undefined;
    }
  }

  // return weekdayStyle ? weekday : yearLabel == "show" ? monthYear : month;
}

export const dayFormatter = new DateFormatter("en-US", {
  day: "2-digit",
});

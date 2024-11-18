import { DateFormatter } from "@internationalized/date";

import { MonthLabel, WeekdayLabel, YearLabel } from "@/types";

export function formatter({
  weekdayLabel,
  monthLabel,
  yearLabel,
}: {
  weekdayLabel?: WeekdayLabel;
  monthLabel?: MonthLabel;
  yearLabel?: YearLabel;
}) {
  const monthYear = new DateFormatter("en-US", {
    month: monthLabel || "long",
    year: "numeric",
  });
  const month = new DateFormatter("en-US", {
    month: monthLabel || "long",
  });
  const weekday = new DateFormatter("en-US", {
    weekday: weekdayLabel,
  });

  return weekdayLabel ? weekday : yearLabel == "show" ? monthYear : month;
}

export const dayFormatter = new DateFormatter("en-US", {
  day: "2-digit",
});

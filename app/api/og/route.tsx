/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.
import {
  getDayOfWeek,
  getLocalTimeZone,
  parseDate,
  isSameMonth,
  getWeeksInMonth,
} from "@internationalized/date";
import { NextRequest } from "next/server";
import "@/styles/fonts.css";

import {
  LabelVisibility,
  MonthStyle,
  WeekdayStart,
  WeekdayStyle,
} from "@/types";
import { dayFormatter, formatter } from "@/helpers/formats";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const date = searchParams.get("date");

  const bg: string = searchParams.get("bg") || "f6f6f6";
  const text: string = searchParams.get("text") || "000000";

  const start: WeekdayStart =
    (searchParams.get("week-start") as WeekdayStart) || "0";
  const weekdayStyle: WeekdayStyle =
    (searchParams.get("week-style") as WeekdayStyle) || "narrow";
  // const weekdayFont = searchParams.get("week-font") || "sans";
  const weekdaySize: number = Number(searchParams.get("week-size")) || 55;
  const weekdayLabel: LabelVisibility =
    (searchParams.get("week-label") as LabelVisibility) || "show";
  const nonMonthDays: LabelVisibility =
    (searchParams.get("non-days") as LabelVisibility) || "show";

  const monthStyle: MonthStyle =
    (searchParams.get("month-style") as MonthStyle) || "long";
  // const monthFont = searchParams.get("month-font") || "sans";
  const monthSize: number = Number(searchParams.get("month-size")) || 65;
  const monthLabel: LabelVisibility =
    (searchParams.get("month-label") as LabelVisibility) || "show";

  const yearLabel: LabelVisibility =
    (searchParams.get("year-label") as LabelVisibility) || "show";
  const size: string = searchParams.get("size") || "3840x2160";

  const bgColor = bg.split("-");
  const gradient: string = bgColor.map((color) => "#" + color).join(", ");

  if (!date) {
    return new ImageResponse(
      (
        <>
          Visit with &quot;?date=2020-10-01&quot; or
          &quot;?date=2020-10-01&bg=#f6f6f6&text=#000000&quot;
        </>
      ),
      {
        width: 3840,
        height: 2160,
      },
    );
  }

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Sunday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const sundayStart = weekdays.slice(0, 7);
  const mondayStart = weekdays.slice(1);
  const weekStart = start == "0" ? sundayStart : mondayStart;
  const daysInWeek = Array.from(Array(7), (_, index) => index);
  const weekInMonth = Array.from(
    Array(getWeeksInMonth(parseDate(date), "en-US")),
    (_, index) => index,
  );

  const firstDate = parseDate(date)
    .subtract({
      days: getDayOfWeek(parseDate(date), "en-US"),
    })
    .add({ days: Number(start) });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          // fontFamily: "serif",
          fontSize: weekdaySize,
          color: `#${text}`,
          background:
            bgColor.length > 1
              ? `linear-gradient(217deg, ${gradient})`
              : `#${bgColor[0]}`,
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "3rem",
        }}
      >
        <p
          // tw={`font-${monthFont}`}
          // tw="font-serif"
          style={{
            fontSize: monthSize,
            margin: 0,
            // fontFamily: `var(--font-serif)`,
          }}
        >
          {/* {monthYearFormatter.format(
            parseDate(date).toDate(getLocalTimeZone()),
          )} */}
          {formatter({ monthStyle, monthLabel, yearLabel })?.format(
            parseDate(date).toDate(getLocalTimeZone()),
          )}
        </p>
        <div
          style={{ opacity: 0.5 }}
          // tw={`flex items-center justify-around ${weekdayLabel == "long" && "w-1/2"}`}
          tw="flex items-center justify-around"
        >
          {weekStart.map((day, index) => (
            <p
              key={day}
              style={{
                margin: 0,
                width:
                  weekdayStyle == "long"
                    ? "24rem"
                    : weekdayStyle == "short"
                      ? "10rem"
                      : "8rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textTransform: "uppercase",
                // fontFamily: "serif",
              }}
              // tw={`${weekdayFont}`}
            >
              {formatter({ weekdayStyle, weekdayLabel })?.format(
                parseDate(firstDate.add({ days: index }).toString()).toDate(
                  getLocalTimeZone(),
                ),
              )}
            </p>
          ))}
        </div>
        {weekInMonth.map((week) => (
          <div
            key={week}
            // tw={`flex items-center justify-around ${weekdayLabel == "long" && "w-1/2"}`}
            // tw={`flex items-center justify-around ${weekdayLabel == "long" ? "w-1/2" : "w-1/3"}`}
            tw="flex items-center justify-around"
          >
            {daysInWeek.map((day) => (
              <p
                key={firstDate.add({ weeks: week, days: day }).toString()}
                style={{
                  margin: 0,
                  opacity: isSameMonth(
                    parseDate(date),
                    firstDate.add({ weeks: week, days: day }),
                  )
                    ? 1
                    : nonMonthDays == "hide"
                      ? 0
                      : 0.5,
                  width:
                    weekdayStyle == "long"
                      ? "24rem"
                      : weekdayStyle == "short"
                        ? "10rem"
                        : "8rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  // fontFamily: "serif",
                }}
                // tw={`${weekdayFont}`}
              >
                {dayFormatter.format(
                  firstDate
                    .add({ weeks: week, days: day })
                    .toDate(getLocalTimeZone()),
                )}
              </p>
            ))}
          </div>
        ))}
      </div>
    ),
    {
      width: Number(size.split("x")[0]),
      height: Number(size.split("x")[1]),
    },
  );
}

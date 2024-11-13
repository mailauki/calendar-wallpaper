/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.
import {
  DateFormatter,
  getDayOfWeek,
  getLocalTimeZone,
  parseDate,
  isSameMonth,
  getWeeksInMonth,
} from "@internationalized/date";

import { WeekdayLabel, WeekdayStart } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const bg = searchParams.get("bg") || "f6f6f6";
  const text = searchParams.get("tc") || "000";
  const start: WeekdayStart =
    (searchParams.get("start") as WeekdayStart) || "0";
  const label: WeekdayLabel =
    (searchParams.get("label") as WeekdayLabel) || "short";
  // const ratio: AspectRatio = (searchParams.get("ar") as AspectRatio) || "16:9";
  const size = searchParams.get("size") || "3840x2160";

  const bgColor = bg.split(",");
  const gradient = bgColor.map((color) => "#" + color).join(", ");

  const formatter = new DateFormatter("en-US", {
    month: "long",
    year: "numeric",
  });
  const dayFormatter = new DateFormatter("en-US", {
    day: "2-digit",
  });

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
          fontSize: 55,
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
        <p style={{ fontSize: 65, margin: 0 }}>
          {formatter.format(parseDate(date).toDate(getLocalTimeZone()))}
        </p>
        <div
          style={{ opacity: 0.5 }}
          tw={`flex items-center justify-around ${label == "full" ? "w-1/2" : "w-1/3"}`}
        >
          {weekStart.map((day) => (
            <p
              key={day}
              style={{
                margin: 0,
                width: "10rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {label == "short" && day.charAt(0)}
              {label == "long" && day.substring(0, 3)}
              {label == "full" && day}
            </p>
          ))}
        </div>
        {weekInMonth.map((week) => (
          <div
            key={week}
            tw={`flex items-center justify-around ${label == "full" ? "w-1/2" : "w-1/3"}`}
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
                    : 0.5,
                  width: "10rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
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

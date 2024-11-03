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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const bg = searchParams.get("bg") || "f6f6f6";
  const text = searchParams.get("text") || "000";
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
          &quot;?date=2020-10-01&bg=#F6F6F6&text=#000000&quot;
        </>
      ),
      {
        width: 3840,
        height: 2160,
      },
    );
  }

  const daysInWeek = Array.from(Array(7), (_, index) => index);
  const weekInMonth = Array.from(
    Array(getWeeksInMonth(parseDate(date), "en-US")),
    (_, index) => index,
  );

  const firstDate = parseDate(date).subtract({
    days: getDayOfWeek(parseDate(date), "en-US"),
  });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 55,
          color: `#${text}`,
          backgroundColor: `#${bg}`,
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
          tw="flex items-center justify-around w-1/3"
        >
          <p style={{ margin: 0 }}>S</p>
          <p style={{ margin: 0 }}>M</p>
          <p style={{ margin: 0 }}>T</p>
          <p style={{ margin: 0 }}>W</p>
          <p style={{ margin: 0 }}>T</p>
          <p style={{ margin: 0 }}>F</p>
          <p style={{ margin: 0 }}>S</p>
        </div>
        {weekInMonth.map((week) => (
          <div key={week} tw="flex items-center justify-around w-1/3">
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
      width: 3840,
      height: 2160,
    },
  );
  // const image = (
  //   <div
  //     style={{
  //       width: 1200,
  //       height: 630,
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       fontSize: 60,
  //       backgroundColor: "pink",
  //     }}
  //   >
  //     <p>{formatter.format(parseDate(date).toDate(getLocalTimeZone()))}</p>
  //   </div>
  // );

  // return new ImageResponse(image);
}

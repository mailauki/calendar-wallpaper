import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.
import {
  DateFormatter,
  getLocalTimeZone,
  parseDate,
} from "@internationalized/date";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const formatter = new DateFormatter("en-US", {
    month: "long",
    year: "numeric",
  });

  if (!date) {
    return new ImageResponse(<>Visit with &quot;?date=vercel&quot;</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{formatter.format(parseDate(date).toDate(getLocalTimeZone()))}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

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
  const bg = searchParams.get("bg") || "#f6f6f6";
  const text = searchParams.get("text") || "#000";
  const formatter = new DateFormatter("en-US", {
    month: "long",
    year: "numeric",
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
        width: 1200,
        height: 630,
      },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: text,
          backgroundColor: bg,
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {formatter.format(parseDate(date).toDate(getLocalTimeZone()))}
      </div>
    ),
    {
      width: 1200,
      height: 630,
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

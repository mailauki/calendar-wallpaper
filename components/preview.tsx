import {
  Button,
  CalendarDate,
  Card,
  CardFooter,
  Link,
} from "@nextui-org/react";
import React from "react";

export default function Preview({
  date,
  bgColor,
  textColor,
  start,
  size,
}: {
  date: CalendarDate;
  bgColor: string[];
  textColor: string;
  start: 0 | 1;
  size: string;
}) {
  const text = textColor.split("#")[1];
  const bg = bgColor.map((color) => color.split("#").join(""));
  const imageUrl = `/api/og?date=${date.toString()}&bg=${bg}&text=${text}&start=${start}&size=${size}`;
  // const [imageUrl, setImageUrl] = React.useState(undefined);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [imageError, setImageError] = React.useState<string | null>(null);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch(
  //         `/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}&start=${start}&size=${size}`,
  //       );

  //       if (res.ok) {
  //         const data = await res.json();

  //         setImageUrl(data.url);
  //       } else {
  //         setImageError("Image not found");
  //       }
  //     } catch (error) {
  //       setImageError("Error fetching image");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, [date, bgColor, textColor, start, size]);

  return (
    <>
      <Card isFooterBlurred className="overflow-hidden">
        <img
          alt={date.toString()}
          src={imageUrl}
          style={{ maxHeight: "440px", aspectRatio: "16:9" }}
          // className="h-full max-h-40"
        />
        {/* <Image
          alt={date.toString()}
          height={440}
          isLoading={isLoading || Boolean(imageError)}
          src={imageUrl}
          width={784}
        /> */}
        <CardFooter className="justify-between">
          <Button
            as={Link}
            color="default"
            href={imageUrl}
            radius="full"
            target="_blank"
            variant="light"
          >
            Preview
          </Button>
          <Button color="primary" radius="full">
            Download
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

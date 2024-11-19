"use client";

import React from "react";
import {
  Button,
  Card,
  CardFooter,
  Link,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { BsArrowRight as ArrowRightIcon } from "react-icons/bs";
import { useSearchParams } from "next/navigation";

import { PreviewProps, QueryParams } from "@/types";

export default function Preview({
  date,
  bgColor,
  textColor,
  weekdayStart,
  weekdayLabel,
  weekdayFont,
  weekdaySize,
  monthLabel,
  monthFont,
  monthSize,
  yearLabel,
  wallpaperSize,
  ratio,
}: PreviewProps) {
  const searchParams = useSearchParams();
  const text = textColor.split("#")[1];
  const bg = bgColor.map((color) => color.split("#").join("")).join("-");
  // let url = `/api/og?date=${date.toString()}&bg=${bg}&text=${text}&start=${weekdayStart}&label=${weekdayLabel}&ar=${ratio}&size=${size}`;

  const setParams = React.useCallback(
    (name: QueryParams, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  let url =
    "/api/og" +
    "?" +
    setParams("date", date.toString()) +
    "&" +
    setParams("bg", bg) +
    "&" +
    setParams("text", text) +
    "&" +
    setParams("start", weekdayStart) +
    "&" +
    setParams("week-label", weekdayLabel) +
    "&" +
    setParams("week-font", weekdayFont) +
    "&" +
    setParams("week-size", String(weekdaySize)) +
    "&" +
    setParams("month-label", monthLabel) +
    "&" +
    setParams("month-font", monthFont) +
    "&" +
    setParams("month-size", String(monthSize)) +
    "&" +
    setParams("year-label", yearLabel) +
    "&" +
    setParams("size", wallpaperSize);
  const [imageUrl, setImageUrl] = React.useState<string | undefined>(undefined);
  const [imageError, setImageError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setImageUrl(undefined);
    setImageError(null);
    async function fetchImage() {
      let data = await fetch(url);

      if (data.ok) setImageUrl(data.url);
      else setImageError("Image preview failed to load");
    }
    fetchImage();
  }, [url]);

  return (
    <Card isFooterBlurred className="overflow-hidden">
      {imageError && <CardHeader>{imageError}</CardHeader>}
      {!imageError && (
        <CardBody className="items-center">
          <Image
            alt={date.toString()}
            height={440}
            isLoading={!imageUrl}
            src={imageUrl}
            style={{
              aspectRatio: ratio,
              objectFit: "cover",
            }}
          />
        </CardBody>
      )}
      <CardFooter className="justify-between gap-4">
        <Button
          as={Link}
          className="w-2/5 min-w-fit"
          color="primary"
          download={imageUrl}
          radius="full"
        >
          Download
        </Button>
        <Button
          as={Link}
          className="w-1/5 min-w-fit"
          color="default"
          endContent={<ArrowRightIcon />}
          href={imageUrl}
          radius="full"
          target="_blank"
          variant="light"
        >
          Preview
        </Button>
      </CardFooter>
    </Card>
  );
}

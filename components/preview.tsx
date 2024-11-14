import {
  Button,
  CalendarDate,
  Card,
  CardFooter,
  Link,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import React from "react";
import { BsArrowRight as ArrowRightIcon } from "react-icons/bs";

import { WeekdayLabel, WeekdayStart } from "@/types";

export default function Preview({
  date,
  bgColor,
  textColor,
  weekdayStart,
  weekdayLabel,
  size,
  ratio,
}: {
  date: CalendarDate;
  bgColor: string[];
  textColor: string;
  weekdayStart: WeekdayStart;
  weekdayLabel: WeekdayLabel;
  size: string;
  ratio: string;
}) {
  const text = textColor.split("#")[1];
  const bg = bgColor.map((color) => color.split("#").join(""));
  let url = `/api/og?date=${date.toString()}&bg=${bg}&tc=${text}&start=${weekdayStart}&label=${weekdayLabel}&ar=${ratio}&size=${size}`;
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
    <>
      <Card isFooterBlurred className="overflow-hidden">
        {imageError && <CardHeader>{imageError}</CardHeader>}
        {!imageError && (
          <CardBody className="items-center">
            <Image
              alt={date.toString()}
              height={440}
              isLoading={!Boolean(imageUrl)}
              src={imageUrl}
              style={{
                // maxHeight: "440px",
                aspectRatio: ratio,
                // objectFit: "contain",
                objectFit: "cover",
              }}
              // width={784}
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
    </>
  );
}

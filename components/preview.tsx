import {
  Button,
  CalendarDate,
  Card,
  CardBody,
  CardFooter,
  Link,
  Image,
  CardHeader,
} from "@nextui-org/react";

export default function Preview({
  date,
  bgColor,
  textColor,
  start,
  size,
}: {
  date: CalendarDate;
  bgColor: string;
  textColor: string;
  start: 0 | 1;
  size: string;
}) {
  return (
    <>
      <Card isFooterBlurred>
        <img
          alt={date.toString()}
          src={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}&start=${start}&size=${size}`}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <Button
            as={Link}
            color="default"
            href={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}&start=${start}&size=${size}`}
            radius="full"
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

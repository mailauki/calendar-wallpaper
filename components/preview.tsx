import { CalendarDate, Card, Link } from "@nextui-org/react";

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
      <Card
        isPressable
        as={Link}
        href={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}&start=${start}&size=${size}`}
        radius="sm"
        shadow="none"
      >
        <img
          alt={date.toString()}
          src={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}&start=${start}&size=${size}`}
        />
      </Card>
    </>
  );
}

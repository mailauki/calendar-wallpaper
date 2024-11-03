import { CalendarDate, Card, Link } from "@nextui-org/react";

export default function Preview({
  date,
  bgColor,
  textColor,
}: {
  date: CalendarDate;
  bgColor: string;
  textColor: string;
}) {
  return (
    <>
      <Card
        isPressable
        as={Link}
        href={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}`}
        radius="sm"
        shadow="none"
      >
        <img
          alt={date.toString()}
          src={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}`}
        />
      </Card>
    </>
  );
}

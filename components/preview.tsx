import { CalendarDate } from "@nextui-org/react";

export default function Preview({ date }: { date: CalendarDate }) {
  return (
    <>
      <img alt={date.toString()} src={`/api/og?date=${date.toString()}`} />
    </>
  );
}

import { CalendarDate } from "@nextui-org/react";

import CalendarSelect from "./select/calendar";

export default async function CalendarPreview({ date }: { date: CalendarDate }) {
  return <CalendarSelect date={date} value={date} />;
}

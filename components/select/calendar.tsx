"use client";

import React from "react";
import { Calendar } from "@nextui-org/react";
import {
  CalendarDate,
  DateFormatter,
  DateValue,
  getLocalTimeZone,
} from "@internationalized/date";

export default function CalendarSelect({
  value,
  date,
}: {
  value: DateValue;
  date: CalendarDate;
}) {
  const formatter = new DateFormatter("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="py-4">
      <p className="text-lg text-center">
        {formatter.format(date.toDate(getLocalTimeZone()))}
      </p>
      <div className="flex justify-center">
        <Calendar
          isReadOnly
          aria-label="Calendar"
          classNames={{
            base: "bg-transparent shadow-none overflow-hidden",
            headerWrapper: "hidden",
            gridHeader: "bg-transparent shadow-none",
            gridHeaderRow: "py-2",
            cellButton:
              "data-[selected=true]:bg-transparent data-[selected=true]:text-forground data-[focus-visible=true]:outline-transparent",
          }}
          focusedValue={value}
          value={value}
        />
      </div>
    </div>
  );
}

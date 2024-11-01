"use client";

import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/listbox";
import React from "react";
import {
  DateFormatter,
  getLocalTimeZone,
  startOfYear,
  endOfYear,
  CalendarDate,
} from "@internationalized/date";
import { cn } from "@nextui-org/react";

export default function MonthsSelect({
  date,
  selectedKeys,
  setSelectedKeys,
}: {
  date: CalendarDate;
  selectedKeys: Set<string>;
  setSelectedKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
}) {
  const formatter = new DateFormatter("en-US", { month: "long" });
  const startDate = startOfYear(date);
  const endDate = endOfYear(date);

  function getDatesBetween({
    startDate,
    endDate,
  }: {
    startDate: CalendarDate;
    endDate: CalendarDate;
  }) {
    let dates = new Array<CalendarDate>();
    let currentDate = startDate;
    let lastDate = endDate;

    while (currentDate <= lastDate) {
      dates.push(currentDate);
      currentDate = currentDate.add({ months: 1 });
    }

    return dates;
  }

  const months = getDatesBetween({ startDate, endDate });

  return (
    <>
      <Listbox
        disallowEmptySelection
        aria-label="Single selection example"
        itemClasses={{
          base: cn(
            "inline-flex w-full max-w-md",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-lg gap-2 px-4 py-3 border-2 border-transparent",
            "data-[selected=true]:border-primary",
          ),
        }}
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
      >
        <ListboxSection title="Select Month">
          {months.map((month) => (
            <ListboxItem key={month.month} value={month.month}>
              {formatter.format(month.toDate(getLocalTimeZone()))}
            </ListboxItem>
          ))}
        </ListboxSection>
      </Listbox>
    </>
  );
}

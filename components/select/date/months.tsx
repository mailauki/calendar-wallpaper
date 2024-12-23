"use client";

import React from "react";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/listbox";
import {
  DateFormatter,
  getLocalTimeZone,
  startOfYear,
  endOfYear,
  CalendarDate,
} from "@internationalized/date";
import { Accordion, AccordionItem, cn } from "@nextui-org/react";

import Checkbox from "@/components/buttons/checkbox";

export default function MonthsSelect({
  date,
  selectedKeys,
  setSelectedKeys,
  isSelected,
  setIsSelected,
}: {
  date: CalendarDate;
  selectedKeys: Set<string>;
  setSelectedKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
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

  const [accordionOpen, setAccordionOpen] = React.useState(new Set([""]));

  function handleOpenAccordion() {
    accordionOpen.has("other-month") || isSelected
      ? setAccordionOpen(new Set([""]))
      : setAccordionOpen(new Set(["other-month"]));
  }

  React.useEffect(() => {
    handleOpenAccordion();
  }, [date]);

  return (
    <>
      <Checkbox
        isSelected={isSelected}
        label="Use current month"
        onChange={handleOpenAccordion}
        onValueChange={setIsSelected}
      >
        {formatter.format(date.toDate(getLocalTimeZone()))}
      </Checkbox>
      <Accordion selectedKeys={accordionOpen}>
        <AccordionItem
          key="other-month"
          hideIndicator
          aria-label="Open other month options"
          classNames={{ trigger: "hidden", content: "mt-1" }}
        >
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Listbox
              disallowEmptySelection
              aria-label="Single selection example"
              itemClasses={{
                base: cn(
                  "inline-flex w-full min-w-full",
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
              <ListboxSection title="Select month">
                {months.map((month) => (
                  <ListboxItem key={month.month} value={month.month}>
                    {formatter.format(month.toDate(getLocalTimeZone()))}
                  </ListboxItem>
                ))}
              </ListboxSection>
            </Listbox>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}

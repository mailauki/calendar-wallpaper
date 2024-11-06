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
import {
  Accordion,
  AccordionItem,
  Checkbox,
  Chip,
  cn,
} from "@nextui-org/react";

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
    accordionOpen.has("other-month")
      ? setAccordionOpen(new Set([]))
      : setAccordionOpen(new Set(["other-month"]));
  }

  return (
    <>
      <Checkbox
        classNames={{
          base: cn(
            "inline-flex w-full min-w-full",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-lg gap-2 m-0 px-4 py-3 border-2 border-transparent",
          ),
          label: "w-full",
        }}
        isSelected={isSelected}
        onChange={handleOpenAccordion}
        onValueChange={setIsSelected}
      >
        <div className="w-full flex justify-between gap-2">
          Use current month
          <Chip variant="flat">
            {formatter.format(
              date
                .set({ month: Number(selectedKeys.values().next().value) })
                .toDate(getLocalTimeZone()),
            )}
          </Chip>
        </div>
      </Checkbox>
      <Accordion selectedKeys={accordionOpen}>
        <AccordionItem
          key="other-month"
          hideIndicator
          aria-label="Open other month options"
          classNames={{ trigger: "hidden", content: "mt-1" }}
          // title={
          //   <Checkbox
          //     classNames={{
          //       base: cn(
          //         "inline-flex w-full min-w-full",
          //         "hover:bg-content2 items-center justify-start",
          //         "cursor-pointer rounded-lg gap-2 m-0 p-4 border-2 border-transparent",
          //       ),
          //       label: "w-full",
          //     }}
          //     isSelected={isSelected}
          //     onChange={handleOpenAccordion}
          //     onValueChange={setIsSelected}
          //   >
          //     <div className="w-full flex justify-between gap-2">
          //       Use current month
          //       <Chip variant="flat">
          //         {formatter.format(
          //           date
          //             .set({
          //               month: Number(selectedKeys.values().next().value),
          //             })
          //             .toDate(getLocalTimeZone()),
          //         )}
          //       </Chip>
          //     </div>
          //   </Checkbox>
          // }
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

"use client";

import React from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { CalendarDate, Chip, cn } from "@nextui-org/react";

export default function YearSelect({
  date,
  value,
  setValue,
  isSelected,
  setIsSelected,
}: {
  date: CalendarDate;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [accordionOpen, setAccordionOpen] = React.useState(new Set([""]));

  function handleOpenAccordion() {
    accordionOpen.has("custom-year") || isSelected
      ? setAccordionOpen(new Set([]))
      : setAccordionOpen(new Set(["custom-year"]));
  }

  React.useEffect(() => {
    handleOpenAccordion();
  }, [date]);

  return (
    <>
      <Checkbox
        classNames={{
          base: cn(
            "inline-flex w-full min-w-full",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-medium gap-2 m-0 px-4 py-3 border-2 border-transparent",
          ),
          label: "w-full",
        }}
        isSelected={isSelected}
        onChange={handleOpenAccordion}
        onValueChange={setIsSelected}
      >
        <div className="w-full flex justify-between gap-2">
          Use current year
          <Chip variant="flat">{date.year}</Chip>
        </div>
      </Checkbox>
      <Accordion selectedKeys={accordionOpen}>
        <AccordionItem
          key="custom-year"
          hideIndicator
          aria-label="Open custom year input"
          classNames={{ trigger: "hidden", content: "mt-1" }}
        >
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              description="Enter your desired year"
              label="Year"
              type="number"
              value={value}
              onValueChange={setValue}
            />
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}

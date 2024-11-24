"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  CalendarDate,
  Input,
} from "@nextui-org/react";

import Checkbox from "@/components/buttons/checkbox";

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
        isSelected={isSelected}
        label="Use current year"
        onChange={handleOpenAccordion}
        onValueChange={setIsSelected}
      >
        {date.year}
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

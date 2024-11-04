"use client";

import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";
import { Chip, cn } from "@nextui-org/react";

export default function YearSelect({
  value,
  setValue,
  isSelected,
  setIsSelected,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [accordionOpen, setAccordionOpen] = React.useState(new Set([""]));

  function handleOpenAccordion() {
    accordionOpen.has("custom-year")
      ? setAccordionOpen(new Set([]))
      : setAccordionOpen(new Set(["custom-year"]));
  }

  return (
    <>
      <Checkbox
        classNames={{
          base: cn(
            "inline-flex w-full min-w-full",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-lg gap-2 m-0 p-4 border-2 border-transparent",
          ),
          label: "w-full",
        }}
        isSelected={isSelected}
        onChange={handleOpenAccordion}
        onValueChange={setIsSelected}
      >
        <div className="w-full flex justify-between gap-2">
          Use current year
          <Chip variant="flat">{value}</Chip>
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

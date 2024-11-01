"use client";

import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";
import { cn } from "@nextui-org/react";

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
  const [inputOpen, setInputOpen] = React.useState(new Set([""]));

  function handleOpenInput() {
    inputOpen.has("custom-year")
      ? setInputOpen(new Set([]))
      : setInputOpen(new Set(["custom-year"]));
  }

  return (
    <>
      <Checkbox
        classNames={{
          base: cn(
            "inline-flex w-full max-w-md",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-lg gap-2 m-0 p-4 border-2 border-transparent",
          ),
          label: "w-full",
        }}
        isSelected={isSelected}
        onChange={handleOpenInput}
        onValueChange={setIsSelected}
      >
        Use current year
      </Checkbox>
      <Accordion selectedKeys={inputOpen}>
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

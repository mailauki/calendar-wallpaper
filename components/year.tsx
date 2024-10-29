"use client";

import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function YearSelect() {
  let date = today(getLocalTimeZone());
  // const selectedValue = date.year;
  const [value, setValue] = React.useState(`${date.year}`);
  const [isSelected, setIsSelected] = React.useState(true);
  const selectedValue = React.useMemo(
    () => (isSelected ? date.year : Number(value)),
    [isSelected, value],
  );
  const [inputOpen, setInputOpen] = React.useState(new Set([""]));

  function handleOpenInput() {
    inputOpen.has("custom-year")
      ? setInputOpen(new Set([]))
      : setInputOpen(new Set(["custom-year"]));
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
          <Checkbox
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
        </div>
        <p className="text-small text-default-500">
          Selected value: {selectedValue}
        </p>
      </div>
    </>
  );
}

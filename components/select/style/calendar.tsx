"use client";

import React from "react";
import { CardBody, CardHeader, Input } from "@nextui-org/react";

import { NonMonthDaysProps, WeekdayFontProps, WeekdaySizeProps } from "@/types";
import Box from "@/components/box";
import Checkbox from "@/components/buttons/checkbox";

export default function CalendarStyleSelect({
  weekdayFont,
  setWeekdayFont,
  weekdaySize,
  setWeekdaySize,
  nonMonthDays,
  setNonMonthDays,
}: WeekdayFontProps & WeekdaySizeProps & NonMonthDaysProps) {
  return (
    <>
      <Box>
        <CardHeader>Calendar style</CardHeader>
        <CardBody className="gap-4">
          {/* <RadioGroup
            className="w-full min-w-full"
            label="Select weekday and calendar font"
            orientation="horizontal"
            value={weekdayFont}
            onValueChange={setWeekdayFont}
          >
            {mainFonts.map((font) => (
              <Radio key={font.key} className={font.key} value={font.value}>
                {font.label}
              </Radio>
            ))}
          </RadioGroup> */}
          <Input
            className="max-w-24"
            label="Font size"
            labelPlacement="outside"
            type="number"
            value={String(weekdaySize)}
            variant="bordered"
            onChange={(event) => setWeekdaySize(Number(event.target.value))}
          >
            {weekdaySize}
          </Input>
          <Checkbox
            isSelected={nonMonthDays == "show" ? true : false}
            label="Non-month days"
            onValueChange={() =>
              nonMonthDays == "show"
                ? setNonMonthDays("hide")
                : setNonMonthDays("show")
            }
          >
            {nonMonthDays}
          </Checkbox>
        </CardBody>
      </Box>
    </>
  );
}

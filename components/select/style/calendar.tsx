"use client";

import React from "react";
import { CardBody, CardHeader, Input, RadioGroup } from "@nextui-org/react";

import { WeekdayFontProps, WeekdaySizeProps } from "@/types";
import { mainFonts } from "@/helpers/fonts";
import Box from "@/components/box";
import Radio from "@/components/radio-button";

export default function CalendarStyleSelect({
  weekdayFont,
  setWeekdayFont,
  weekdaySize,
  setWeekdaySize,
}: WeekdayFontProps & WeekdaySizeProps) {
  return (
    <>
      <Box>
        <CardHeader>Calendar style</CardHeader>
        <CardBody className="gap-4">
          <RadioGroup
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
          </RadioGroup>
          <Input
            label="Font size"
            type="number"
            value={String(weekdaySize)}
            onChange={(event) => setWeekdaySize(Number(event.target.value))}
          >
            {weekdaySize}
          </Input>
        </CardBody>
      </Box>
    </>
  );
}

"use client";

import React from "react";
import { CardBody, CardHeader, Input, RadioGroup } from "@nextui-org/react";

import {
  LabelVisibilityProps,
  MonthFontProps,
  MonthSizeProps,
  MonthStyle,
  MonthStyleProps,
} from "@/types";
import Box from "@/components/box";
import Radio from "@/components/buttons/radio";
import { monthStyles } from "@/helpers/sizes";
import Checkbox from "@/components/buttons/checkbox";

export default function MonthStyleSelect({
  monthFont,
  setMonthFont,
  monthSize,
  setMonthSize,
  monthStyle,
  setMonthStyle,
  monthLabel,
  setMonthLabel,
  yearLabel,
  setYearLabel,
}: MonthFontProps & MonthSizeProps & MonthStyleProps & LabelVisibilityProps) {
  return (
    <>
      <Box>
        <CardHeader>Month and year style</CardHeader>
        <CardBody className="gap-4">
          {/* <RadioGroup
            className="w-full min-w-full"
            label="Select month and year font"
            orientation="horizontal"
            value={monthFont}
            onValueChange={setMonthFont}
          >
            {mainFonts.map((font) => (
              <Radio key={font.key} className={font.key} value={font.value}>
                {font.label}
              </Radio>
            ))}
          </RadioGroup> */}
          <Input
            label="Font size"
            labelPlacement="outside"
            type="number"
            value={String(monthSize)}
            variant="bordered"
            onChange={(event) => setMonthSize(Number(event.target.value))}
          >
            {monthSize}
          </Input>
          <RadioGroup
            className="w-full min-w-full"
            label="Select month and year label style"
            orientation="horizontal"
            value={monthStyle}
            onValueChange={(value: string) =>
              setMonthStyle(value as MonthStyle)
            }
          >
            {monthStyles.map((type) => (
              <Radio
                key={type.value}
                description={type.description}
                value={type.value}
              >
                {type.label}
              </Radio>
            ))}
          </RadioGroup>
          <Checkbox
            isSelected={monthLabel == "show" ? true : false}
            label="Month label"
            onValueChange={() =>
              monthLabel == "show"
                ? setMonthLabel("hide")
                : setMonthLabel("show")
            }
          >
            {monthLabel}
          </Checkbox>
          <Checkbox
            isSelected={yearLabel == "show" ? true : false}
            label="Year label"
            onValueChange={() =>
              yearLabel == "show" ? setYearLabel("hide") : setYearLabel("show")
            }
          >
            {yearLabel}
          </Checkbox>
        </CardBody>
      </Box>
    </>
  );
}

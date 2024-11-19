"use client";

import React from "react";
import {
  CardBody,
  CardHeader,
  Checkbox,
  Chip,
  Input,
  RadioGroup,
  cn,
} from "@nextui-org/react";

import { MonthLabel, YearLabel } from "@/types";
import { mainFonts } from "@/helpers/fonts";
import Box from "@/components/box";
import Radio from "@/components/radio-button";
import { monthStyles } from "@/helpers/sizes";

export default function MonthStyleSelect({
  monthFont,
  setMonthFont,
  monthSize,
  setMonthSize,
  monthLabel,
  setMonthLabel,
  yearLabel,
  setYearLabel,
}: {
  monthFont: string;
  setMonthFont: React.Dispatch<React.SetStateAction<string>>;
  monthSize: number;
  setMonthSize: React.Dispatch<React.SetStateAction<number>>;
  monthLabel: string;
  setMonthLabel: React.Dispatch<React.SetStateAction<MonthLabel>>;
  yearLabel: string;
  setYearLabel: React.Dispatch<React.SetStateAction<YearLabel>>;
  setWeekdaySize: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <Box>
        <CardHeader>Month and year style</CardHeader>
        <CardBody className="gap-4">
          <RadioGroup
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
          </RadioGroup>
          <Input
            label="Font size"
            type="number"
            value={String(monthSize)}
            onChange={(event) => setMonthSize(Number(event.target.value))}
          >
            {monthSize}
          </Input>
          <RadioGroup
            className="w-full min-w-full"
            label="Select month and year label size"
            orientation="horizontal"
            value={monthLabel}
            onValueChange={(value: string) =>
              setMonthLabel(value as MonthLabel)
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
            classNames={{
              base: cn(
                "inline-flex w-full min-w-full",
                "hover:bg-content2 items-center justify-start",
                "cursor-pointer rounded-medium gap-2 m-0 px-4 py-3 border-2 border-transparent",
              ),
              label: "w-full",
            }}
            isSelected={yearLabel == "show" ? true : false}
            onValueChange={() =>
              yearLabel == "show" ? setYearLabel("hide") : setYearLabel("show")
            }
          >
            <div className="w-full flex justify-between gap-2">
              Year label
              <Chip variant="flat">{yearLabel}</Chip>
            </div>
          </Checkbox>
        </CardBody>
      </Box>
    </>
  );
}

"use client";

import { CardBody, CardHeader, Chip, RadioGroup } from "@nextui-org/react";
import React from "react";

import {
  WeekdayLabelProps,
  WeekdayStart,
  WeekdayStartProps,
  WeekdayStyle,
  WeekdayStyleProps,
} from "@/types";
import Box from "@/components/box";
import Radio from "@/components/buttons/radio";
import { weekdayStyles } from "@/helpers/sizes";
import Checkbox from "@/components/buttons/checkbox";

export default function WeekdayStyleSelect({
  weekdayStart,
  setWeekdayStart,
  weekdayStyle,
  setWeekdayStyle,
  weekdayLabel,
  setWeekdayLabel,
}: WeekdayStartProps & WeekdayStyleProps & WeekdayLabelProps) {
  return (
    <>
      <Box>
        <CardHeader className="flex flex-col items-start justify-between gap-1">
          Weekday style
          {weekdayStyle == "long" && (
            <Chip
              className="pe-2"
              color="warning"
              size="sm"
              startContent={<p className="px-2">!</p>}
              variant="flat"
            >
              Long weekday labels are not recommended for portrait size
            </Chip>
          )}
        </CardHeader>
        <CardBody className="gap-4">
          <RadioGroup
            className="w-full min-w-full"
            label="Select weekday start"
            orientation="horizontal"
            value={weekdayStart}
            onValueChange={(value: string) =>
              setWeekdayStart(value as WeekdayStart)
            }
          >
            <Radio key={0} value="0">
              Sunday
            </Radio>
            <Radio key={1} value="1">
              Monday
            </Radio>
          </RadioGroup>
          <RadioGroup
            className="w-full min-w-full"
            label="Select weekday label style"
            orientation="horizontal"
            value={weekdayStyle}
            onValueChange={(value: string) =>
              setWeekdayStyle(value as WeekdayStyle)
            }
          >
            {weekdayStyles.map((type) => (
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
            isSelected={weekdayLabel == "show" ? true : false}
            label="Weekday label"
            onValueChange={() =>
              weekdayLabel == "show"
                ? setWeekdayLabel("hide")
                : setWeekdayLabel("show")
            }
          >
            {weekdayLabel}
          </Checkbox>
        </CardBody>
      </Box>
    </>
  );
}

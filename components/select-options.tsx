"use client";

import React from "react";
import {
  today,
  getLocalTimeZone,
  CalendarDate,
  DateValue,
} from "@internationalized/date";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import MonthsSelect from "./select/months";
import YearSelect from "./select/year";
import Preview from "./preview";
import ColorsSelect from "./select/colors";
import Box from "./box";

export default function SelectOptions() {
  // current date
  let date = today(getLocalTimeZone());

  // selected month value
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([`${date.month}`]),
  );
  const [useCurrentMonth, setUseCurrentMonth] = React.useState(true);
  const selectedMonth = React.useMemo(
    // () => Array.from(selectedKeys).join(", "),
    // [selectedKeys],
    () => (useCurrentMonth ? date.month : Array.from(selectedKeys).join(", ")),
    [useCurrentMonth, selectedKeys],
  );

  // selected year value
  const [value, setValue] = React.useState(`${date.year}`);
  const [useCurrentYear, setUseCurrentYear] = React.useState(true);
  const selectedYear = React.useMemo(
    () => (useCurrentYear ? date.year : Number(value)),
    [useCurrentYear, value],
  );

  // selected colors values
  const [bgColor, setBgColor] = React.useState("#f6f6f6");
  const [textColor, setTextColor] = React.useState("#000");

  // date value for calendar preview
  let calDate = new CalendarDate(selectedYear, Number(selectedMonth), 1);
  let [calValue, setCalValue] = React.useState<DateValue>(calDate);

  React.useEffect(() => {
    if (calDate.month !== calValue.month || calDate.year !== calValue.year) {
      setCalValue(calDate);
    }
  }, [calDate]);

  return (
    <>
      <div className="flex flex-col gap-3">
        <Box>
          <MonthsSelect
            date={date}
            isSelected={useCurrentMonth}
            selectedKeys={selectedKeys}
            setIsSelected={setUseCurrentMonth}
            setSelectedKeys={setSelectedKeys}
          />
        </Box>

        <Box>
          <YearSelect
            isSelected={useCurrentYear}
            setIsSelected={setUseCurrentYear}
            setValue={setValue}
            value={value}
          />
        </Box>

        <Box>
          <ColorsSelect
            bgColor={bgColor}
            setBgColor={setBgColor}
            setTextColor={setTextColor}
            textColor={textColor}
          />
        </Box>

        {/* <Box span="sm:row-span-2">
          <CalendarSelect date={calDate} value={calValue} />
        </Box> */}

        <div className="w-full ">
          <div className="flex flex-col gap-3">
            <div className="border-small rounded-small border-default-200 dark:border-default-100">
              <Preview
                bgColor={bgColor.split("#")[1]}
                date={calDate}
                textColor={textColor.split("#")[1]}
              />
            </div>
            {/* <p className="text-xs text-default-500">Preview</p> */}

            <Button
              fullWidth
              as={Link}
              color="primary"
              download={`${date.month.toString()}-${date.year.toString()}`}
              href={`/api/og?date=${date.toString()}&bg=${bgColor.split("#")[1]}&text=${textColor.split("#")[1]}`}
              radius="sm"
              target="_blank"
							size="lg"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

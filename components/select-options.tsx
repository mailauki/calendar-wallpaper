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
import CalendarSelect from "./select/calendar";
import ColorsSelect from "./select/colors";
import Box from "./box";

export default function SelectOptions() {
  // current date
  let date = today(getLocalTimeZone());

  // selected month value
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([`${date.month}`]),
  );
  const selectedMonth = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys],
  );

  // selected year value
  const [value, setValue] = React.useState(`${date.year}`);
  const [isSelected, setIsSelected] = React.useState(true);
  const selectedYear = React.useMemo(
    () => (isSelected ? date.year : Number(value)),
    [isSelected, value],
  );

  // selected colors values
  const [bgColor, setBgColor] = React.useState("#f6f6f6");
  const [textColor, setTextColor] = React.useState("#000000");

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
      <div className="w-full flex flex-wrap items-start justify-center gap-4">
        <Box description={`Selected month: ${selectedMonth}`}>
          <MonthsSelect
            date={date}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
          />
        </Box>

        <div className="flex flex-col gap-4">
          <Box description={`Selected year: ${selectedYear}`}>
            <YearSelect
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setValue={setValue}
              value={value}
            />
          </Box>

          <Box>
            <CalendarSelect date={calDate} value={calValue} />
          </Box>

          <Box>
            <ColorsSelect
              bgColor={bgColor}
              setBgColor={setBgColor}
              setTextColor={setTextColor}
              textColor={textColor}
            />
          </Box>

          <Box description="Preview">
            <Preview bgColor={bgColor} date={calDate} textColor={textColor} />
          </Box>

          <Button
            as={Link}
            color="primary"
            download={`${date.month.toString()}-${date.year.toString()}`}
            href={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}`}
            radius="sm"
            target="_blank"
          >
            Download
          </Button>
        </div>
      </div>
    </>
  );
}

"use client";

import React from "react";
import {
  today,
  getLocalTimeZone,
  CalendarDate,
  DateValue,
} from "@internationalized/date";

import MonthsSelect from "./select/months";
import YearSelect from "./select/year";
import Preview from "./preview";
import CalendarSelect from "./select/calendar";
import Box from "./box";
import ColorsSelect from "./select/colors";

export default function SelectOptions() {
  let date = today(getLocalTimeZone());

  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([`${date.month}`]),
  );
  const selectedMonth = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys],
  );

  const [value, setValue] = React.useState(`${date.year}`);
  const [isSelected, setIsSelected] = React.useState(true);
  const selectedYear = React.useMemo(
    () => (isSelected ? date.year : Number(value)),
    [isSelected, value],
  );

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
            <ColorsSelect />
          </Box>

          <Box description="Preview">
            <Preview date={calDate} />
          </Box>
        </div>
      </div>
    </>
  );
}

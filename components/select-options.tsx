"use client";

import React from "react";
import {
  today,
  getLocalTimeZone,
  CalendarDate,
  DateValue,
} from "@internationalized/date";
import { Tab, Tabs } from "@nextui-org/react";

import Preview from "./preview";
import Box from "./box";
import MonthsSelect from "./select/months";
import YearSelect from "./select/year";
import ColorsSelect from "./select/colors";
import StartSelect from "./select/start";

export default function SelectOptions() {
  // current date
  let date = today(getLocalTimeZone());

  // selected month value
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([`${date.month}`]),
  );
  const [useCurrentMonth, setUseCurrentMonth] = React.useState(true);
  const selectedMonth = React.useMemo(
    () => (useCurrentMonth ? date.month : Array.from(selectedKeys).join(", ")),
    [useCurrentMonth, selectedKeys, date],
  );

  // selected year value
  const [value, setValue] = React.useState(`${date.year}`);
  const [useCurrentYear, setUseCurrentYear] = React.useState(true);
  const selectedYear = React.useMemo(
    () => (useCurrentYear ? date.year : Number(value)),
    [useCurrentYear, value, date],
  );

  // selected colors values
  const [bgColor, setBgColor] = React.useState(["#ebebeb"]); // #f6f6f6
  const [textColor, setTextColor] = React.useState("#000000");

  // date value for calendar preview
  let calDate = new CalendarDate(selectedYear, Number(selectedMonth), 1);
  let [calValue, setCalValue] = React.useState<DateValue>(calDate);

  React.useEffect(() => {
    if (calDate.month !== calValue.month || calDate.year !== calValue.year) {
      setCalValue(calDate);
    }
    if (selectedMonth !== calDate.month)
      calDate.set({ month: Number(selectedMonth) });
    if (selectedYear !== calDate.year)
      calDate.set({ year: Number(selectedYear) });
  }, [calDate]);

  const [start, setStart] = React.useState("sunday");
  const [weekdaySize, setWeekdaySize] = React.useState("short");

  return (
    <>
      <div className="w-full">
        <Preview
          bgColor={bgColor[0].split("#")[1]}
          date={calDate}
          size={weekdaySize}
          start={start == "sunday" ? 0 : 1}
          textColor={textColor.split("#")[1]}
        />
      </div>

      <div className="flex flex-col w-full lg:max-w-md md:max-w-md">
        <Tabs fullWidth aria-label="Options">
          <Tab key="colors" title="Colors">
            <ColorsSelect
              bgColor={bgColor}
              setBgColor={setBgColor}
              setTextColor={setTextColor}
              textColor={textColor}
            />
          </Tab>
          <Tab key="months" title="Months">
            <Box>
              <MonthsSelect
                date={calDate}
                isSelected={useCurrentMonth}
                selectedKeys={selectedKeys}
                setIsSelected={setUseCurrentMonth}
                setSelectedKeys={setSelectedKeys}
              />
            </Box>
          </Tab>
          <Tab key="years" title="Years">
            <Box>
              <YearSelect
                date={calDate}
                isSelected={useCurrentYear}
                setIsSelected={setUseCurrentYear}
                setValue={setValue}
                value={value}
              />
            </Box>
          </Tab>
          <Tab key="labels" title="Labels">
            <Box>
              <StartSelect
                setSize={setWeekdaySize}
                setValue={setStart}
                size={weekdaySize}
                value={start}
              />
            </Box>
          </Tab>
        </Tabs>
      </div>

      {/* <Box span="sm:row-span-2">
          <CalendarSelect date={calDate} value={calValue} />
        </Box> */}
    </>
  );
}

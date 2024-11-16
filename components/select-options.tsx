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
import SizeSelect from "./select/size";

import { AspectRatio, WeekdayLabel, WeekdayStart } from "@/types";
import FontSelect from "./select/font";

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

  // weekday label length and start day
  const [start, setStart] = React.useState<WeekdayStart>("0");
  const [weekdayLabel, setWeekdayLabel] = React.useState<WeekdayLabel>("short");

  // wallpaper size and aspect ratio
  const [ratio, setRatio] = React.useState<AspectRatio>("16:9");
  const [size, setSize] = React.useState("3840x2160");

  return (
    <>
      <div className="w-full">
        <Preview
          bgColor={bgColor}
          date={calDate}
          ratio={ratio}
          size={size}
          textColor={textColor}
          weekdayLabel={weekdayLabel}
          weekdayStart={start}
        />
      </div>

      <div className="flex flex-col w-full lg:max-w-md md:max-w-md">
        <Tabs fullWidth aria-label="Options">
          <Tab key="color" title="Color">
            <ColorsSelect
              bgColor={bgColor}
              setBgColor={setBgColor}
              setTextColor={setTextColor}
              textColor={textColor}
            />
          </Tab>
          <Tab key="font" title="Font">
            <Box>
              <FontSelect />
            </Box>
          </Tab>
          <Tab key="label" title="Label">
            <Box>
              <StartSelect
                setStart={setStart}
                setWeekdayLabel={setWeekdayLabel}
                start={start}
                weekdayLabel={weekdayLabel}
              />
            </Box>
          </Tab>
          <Tab key="size" title="Size">
            <Box>
              <SizeSelect
                ratio={ratio}
                setRatio={setRatio}
                setSize={setSize}
                size={size}
              />
            </Box>
          </Tab>
          <Tab key="date" title="Date">
            <div className="flex flex-col gap-4">
              <Box>
                <MonthsSelect
                  date={calDate}
                  isSelected={useCurrentMonth}
                  selectedKeys={selectedKeys}
                  setIsSelected={setUseCurrentMonth}
                  setSelectedKeys={setSelectedKeys}
                />
              </Box>
              <Box>
                <YearSelect
                  date={calDate}
                  isSelected={useCurrentYear}
                  setIsSelected={setUseCurrentYear}
                  setValue={setValue}
                  value={value}
                />
              </Box>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

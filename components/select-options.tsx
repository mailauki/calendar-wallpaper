"use client";

import React from "react";
import {
  today,
  getLocalTimeZone,
  CalendarDate,
  DateValue,
} from "@internationalized/date";

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
  const [bgColor, setBgColor] = React.useState("#ebebeb"); // #f6f6f6
  const [textColor, setTextColor] = React.useState("#000");

  // date value for calendar preview
  let calDate = new CalendarDate(selectedYear, Number(selectedMonth), 1);
  let [calValue, setCalValue] = React.useState<DateValue>(calDate);

  React.useEffect(() => {
    if (calDate.month !== calValue.month || calDate.year !== calValue.year) {
      setCalValue(calDate);
    }
  }, [calDate]);

  const [start, setStart] = React.useState("sunday");
  const [weekdaySize, setWeekdaySize] = React.useState("short");

  return (
    <>
      {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              alt="Modern building architecture"
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/img/building.jpg"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              href="/"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col w-full lg:max-w-md md:max-w-md gap-4">
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

        <Box>
          <StartSelect
            setSize={setWeekdaySize}
            setValue={setStart}
            size={weekdaySize}
            value={start}
          />
        </Box>
      </div>

      {/* <Box span="sm:row-span-2">
          <CalendarSelect date={calDate} value={calValue} />
        </Box> */}

      <div className="w-full">
        <Preview
          bgColor={bgColor.split("#")[1]}
          date={calDate}
          size={weekdaySize}
          start={start == "sunday" ? 0 : 1}
          textColor={textColor.split("#")[1]}
        />
      </div>
    </>
  );
}

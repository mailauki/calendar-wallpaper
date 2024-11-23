"use client";

import React, { Suspense } from "react";
import {
  today,
  getLocalTimeZone,
  CalendarDate,
  DateValue,
} from "@internationalized/date";
import { Tab, Tabs } from "@nextui-org/react";

import {
  AspectRatio,
  MonthLabel,
  WeekdayLabel,
  WeekdayStart,
  YearLabel,
} from "@/types";

import Preview from "./preview";
import Box from "./box";
import MonthsSelect from "./select/months";
import YearSelect from "./select/year";
import ColorsSelect from "./select/colors/colors";
import SizeSelect from "./select/size";
import CalendarStyleSelect from "./select/style/calendar";
import MonthStyleSelect from "./select/style/month";
import WeekdayStyleSelect from "./select/style/weekday";
import LoadingPreview from "./loading/preview";

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
  const [bgColor, setBgColor] = React.useState(["#EBEBEB"]); // #f6f6f6
  const [textColor, setTextColor] = React.useState("#000000");
  const [bgImage, setBgImage] = React.useState<string | undefined>(undefined);

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

  // weekday label length, font family, size, and start day
  const [start, setStart] = React.useState<WeekdayStart>("0");
  const [weekdayLabel, setWeekdayLabel] =
    React.useState<WeekdayLabel>("narrow");
  const [weekdayFont, setWeekdayFont] = React.useState<string>("sans");
  const [weekdaySize, setWeekdaySize] = React.useState<number>(55);

  // month/year label length, font family, and size
  const [monthLabel, setMonthLabel] = React.useState<MonthLabel>("long");
  const [monthFont, setMonthFont] = React.useState<string>("sans");
  const [monthSize, setMonthSize] = React.useState<number>(65);
  const [yearLabel, setYearLabel] = React.useState<YearLabel>("show");

  // wallpaper size and aspect ratio
  const [ratio, setRatio] = React.useState<AspectRatio>("16:9");
  const [size, setSize] = React.useState("3840x2160");

  return (
    <>
      <div className="w-full">
        <Suspense fallback={<LoadingPreview />}>
          <Preview
            bgColor={bgColor}
            date={calDate}
            monthFont={monthFont}
            monthLabel={monthLabel}
            monthSize={monthSize}
            ratio={ratio}
            textColor={textColor}
            wallpaperSize={size}
            weekdayFont={weekdayFont}
            weekdayLabel={weekdayLabel}
            weekdaySize={weekdaySize}
            weekdayStart={start}
            yearLabel={yearLabel}
          />
        </Suspense>
      </div>

      <div className="flex flex-col w-full lg:max-w-md md:max-w-md">
        <Tabs fullWidth aria-label="Options">
          <Tab key="color" title="Color">
            <ColorsSelect
              bgColor={bgColor}
              bgImage={bgImage}
              setBgColor={setBgColor}
              setBgImage={setBgImage}
              setTextColor={setTextColor}
              textColor={textColor}
            />
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
          <Tab key="style" title="Style">
            <div className="flex flex-col gap-4">
              <MonthStyleSelect
                monthFont={monthFont}
                monthLabel={monthLabel}
                monthSize={monthSize}
                setMonthFont={setMonthFont}
                setMonthLabel={setMonthLabel}
                setMonthSize={setMonthSize}
                setWeekdaySize={setWeekdaySize}
                setYearLabel={setYearLabel}
                yearLabel={yearLabel}
              />
              <CalendarStyleSelect
                setWeekdayFont={setWeekdayFont}
                setWeekdaySize={setWeekdaySize}
                weekdayFont={weekdayFont}
                weekdaySize={weekdaySize}
              />
              <WeekdayStyleSelect
                setStart={setStart}
                setWeekdayLabel={setWeekdayLabel}
                start={start}
                weekdayLabel={weekdayLabel}
              />
            </div>
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

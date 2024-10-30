"use client";

import React from "react";
import {
  today,
  DateFormatter,
  getLocalTimeZone,
  CalendarDate,
  DateValue,
} from "@internationalized/date";
import { Calendar } from "@nextui-org/react";

import MonthsSelect from "./months";
import YearSelect from "./year";

export default function CalendarSelect() {
  let date = today(getLocalTimeZone());
  const formatter = new DateFormatter("en-US", { month: "long" });

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
    // console.log("calDate: " + calDate.month, "calValue: " + calValue.month);
  }, [calDate]);

  return (
    <>
      <div className="w-full flex flex-wrap items-start justify-center gap-4">
        <div className="flex flex-col gap-2">
          <MonthsSelect
            date={date}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
          />
          <p className="text-small text-default-500">
            Selected month: {selectedMonth}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <YearSelect
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setValue={setValue}
              value={value}
            />
            <p className="text-small text-default-500">
              Selected year: {selectedYear}
            </p>
          </div>

          <div className="w-[260px] border rounded-lg py-4">
            {/* <pre>{JSON.stringify(calDate, null, 2)}</pre> */}
            <p className="text-lg text-center">
              {formatter.format(calDate.toDate(getLocalTimeZone()))}{" "}
              {selectedYear}
            </p>
            <Calendar
              isReadOnly
              aria-label="Date (Controlled)"
              classNames={{
                base: "bg-transparent shadow-none overflow-hidden",
                headerWrapper: "hidden",
                gridHeader: "bg-transparent shadow-none",
                gridHeaderRow: "py-2",
                cellButton:
                  "data-[selected=true]:bg-transparent data-[selected=true]:text-forground data-[focus-visible=true]:outline-transparent",
              }}
              focusedValue={calValue}
              value={calValue}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-[260px] border rounded-lg">
              <img
                alt={calDate.toString()}
                src={`/api/og?date=${calDate.toString()}`}
              />
            </div>
            <p className="text-small text-default-500">Preview</p>
          </div>
        </div>
      </div>
    </>
  );
}

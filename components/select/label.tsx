import {
  Checkbox,
  Chip,
  RadioGroup,
  Select,
  SelectItem,
  cn,
} from "@nextui-org/react";

import Radio from "../radio-button";
import Box from "../box";

import { MonthLabel, WeekdayLabel, WeekdayStart, YearLabel } from "@/types";

export default function LabelSelect({
  start,
  setStart,
  weekdayLabel,
  setWeekdayLabel,
  monthLabel,
  setMonthLabel,
  yearLabel,
  setYearLabel,
}: {
  start: string;
  setStart: React.Dispatch<React.SetStateAction<WeekdayStart>>;
  weekdayLabel: WeekdayLabel;
  setWeekdayLabel: React.Dispatch<React.SetStateAction<WeekdayLabel>>;
  monthLabel: string;
  setMonthLabel: React.Dispatch<React.SetStateAction<MonthLabel>>;
  yearLabel: string;
  setYearLabel: React.Dispatch<React.SetStateAction<YearLabel>>;
}) {
  return (
    <>
      <Box>
        <RadioGroup
          className="w-full min-w-full p-4"
          label="Select weekday start"
          orientation="horizontal"
          value={start}
          onValueChange={(value: string) => setStart(value as WeekdayStart)}
        >
          <Radio key={0} value="0">
            Sunday
          </Radio>
          <Radio key={1} value="1">
            Monday
          </Radio>
        </RadioGroup>
        <RadioGroup
          className="w-full min-w-full p-4"
          label="Select weekday label size"
          orientation="horizontal"
          value={weekdayLabel}
          onValueChange={(value: string) =>
            setWeekdayLabel(value as WeekdayLabel)
          }
        >
          <Radio description="Ex: S" value="narrow">
            Narrow
          </Radio>
          <Radio description="Ex: SUN" value="short">
            Short
          </Radio>
          <Radio description="Ex: SUNDAY" value="long">
            Long
          </Radio>
        </RadioGroup>
      </Box>

      <Box>
        <Select
          label="Month style"
          placeholder="Select the month label style"
          value={monthLabel}
          onChange={(event) => setMonthLabel(event.target.value as MonthLabel)}
        >
          {["numeric", "2-digit", "long", "short", "narrow"].map((type) => (
            <SelectItem key={type} className={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
      </Box>
      <Box>
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
      </Box>
    </>
  );
}

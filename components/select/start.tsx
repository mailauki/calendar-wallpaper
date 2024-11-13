import { RadioGroup } from "@nextui-org/react";

import Radio from "../radio-button";

import { WeekdayLabel, WeekdayStart } from "@/types";

export default function StartSelect({
  start,
  setStart,
  weekdayLabel,
  setWeekdayLabel,
}: {
  start: string;
  setStart: React.Dispatch<React.SetStateAction<WeekdayStart>>;
  weekdayLabel: string;
  setWeekdayLabel: React.Dispatch<React.SetStateAction<WeekdayLabel>>;
}) {
  return (
    <>
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
        <Radio description="Ex: S" value="short">
          Short
        </Radio>
        <Radio description="Ex: SUN" value="long">
          Long
        </Radio>
        <Radio description="Ex: SUNDAY" value="full">
          Full
        </Radio>
      </RadioGroup>
    </>
  );
}

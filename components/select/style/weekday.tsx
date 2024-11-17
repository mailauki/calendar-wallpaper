import { CardHeader, Chip, RadioGroup } from "@nextui-org/react";

import { WeekdayLabel, WeekdayStart } from "@/types";
import Box from "@/components/box";
import Radio from "@/components/radio-button";

export default function WeekdayStyleSelect({
  start,
  setStart,
  weekdayLabel,
  setWeekdayLabel,
}: {
  start: string;
  setStart: React.Dispatch<React.SetStateAction<WeekdayStart>>;
  weekdayLabel: WeekdayLabel;
  setWeekdayLabel: React.Dispatch<React.SetStateAction<WeekdayLabel>>;
}) {
  return (
    <>
      <Box>
        <CardHeader className="flex flex-col items-start justify-between gap-1">
          Weekday style
          {weekdayLabel == "long" && (
            <Chip
              className="pe-2"
              color="warning"
              size="sm"
              startContent={<p className="px-2">!</p>}
              variant="flat"
            >
              Long weekday labels are not recommended for portrait size
            </Chip>
          )}
        </CardHeader>
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
    </>
  );
}

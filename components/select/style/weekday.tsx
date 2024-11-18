import { CardBody, CardHeader, Chip, RadioGroup } from "@nextui-org/react";

import { WeekdayLabel, WeekdayStart } from "@/types";
import Box from "@/components/box";
import Radio from "@/components/radio-button";
import { weekdayStyles } from "@/helpers/sizes";

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
        <CardBody className="gap-4">
          <RadioGroup
            className="w-full min-w-full"
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
            className="w-full min-w-full"
            label="Select weekday label size"
            orientation="horizontal"
            value={weekdayLabel}
            onValueChange={(value: string) =>
              setWeekdayLabel(value as WeekdayLabel)
            }
          >
            {weekdayStyles.map((type) => (
              <Radio
                key={type.value}
                description={type.description}
                value={type.value}
              >
                {type.label}
              </Radio>
            ))}
          </RadioGroup>
        </CardBody>
      </Box>
    </>
  );
}

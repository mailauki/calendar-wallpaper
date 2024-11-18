import { CardBody, CardHeader, Input, RadioGroup } from "@nextui-org/react";

import { WeekdayStart } from "@/types";
import { mainFonts } from "@/helpers/fonts";
import Box from "@/components/box";
import Radio from "@/components/radio-button";

export default function CalendarStyleSelect({
  weekdayFont,
  setWeekdayFont,
  weekdaySize,
  setWeekdaySize,
}: {
  weekdayFont: string;
  setWeekdayFont: React.Dispatch<React.SetStateAction<string>>;
  weekdaySize: number;
  start: string;
  setStart: React.Dispatch<React.SetStateAction<WeekdayStart>>;
  setWeekdaySize: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <Box>
        <CardHeader>Calendar style</CardHeader>
        <CardBody className="gap-4">
          <RadioGroup
            className="w-full min-w-full"
            label="Select weekday and calendar font"
            orientation="horizontal"
            value={weekdayFont}
            onValueChange={setWeekdayFont}
          >
            {mainFonts.map((font) => (
              <Radio key={font.key} className={font.key} value={font.value}>
                {font.label}
              </Radio>
            ))}
          </RadioGroup>
          <Input
            label="Font size"
            type="number"
            value={String(weekdaySize)}
            onChange={(event) => setWeekdaySize(Number(event.target.value))}
          >
            {weekdaySize}
          </Input>
        </CardBody>
      </Box>
    </>
  );
}

import {
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";

import { Font, WeekdayStart } from "@/types";
import { mainFonts, otherFonts } from "@/helpers/fonts";
import Box from "@/components/box";

export default function CalendarStyleSelect({
  weekdayFont,
  setWeekdayFont,
  weekdaySize,
  setWeekdaySize,
}: {
  weekdayFont: Font;
  setWeekdayFont: React.Dispatch<React.SetStateAction<Font>>;
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
          <Select
            label="Font style"
            placeholder="Select a font style"
            value={weekdayFont}
            onChange={(event) => setWeekdayFont(event.target.value as Font)}
          >
            <SelectSection showDivider>
              {mainFonts.map((font) => (
                <SelectItem
                  key={font.key}
                  className={font.key}
                  value={font.value}
                >
                  {font.label}
                </SelectItem>
              ))}
            </SelectSection>
            <SelectSection>
              {otherFonts.map((font) => (
                <SelectItem
                  key={font.key}
                  className={font.key}
                  value={font.value}
                >
                  {font.label}
                </SelectItem>
              ))}
            </SelectSection>
          </Select>
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

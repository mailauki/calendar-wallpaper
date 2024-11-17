import {
  CardBody,
  CardHeader,
  Checkbox,
  Chip,
  Input,
  Select,
  SelectItem,
  SelectSection,
  cn,
} from "@nextui-org/react";

import { Font, MonthLabel, YearLabel } from "@/types";
import { mainFonts, otherFonts } from "@/helpers/fonts";
import Box from "@/components/box";

export default function MonthStyleSelect({
  monthFont,
  setMonthFont,
  monthSize,
  setMonthSize,
  monthLabel,
  setMonthLabel,
  yearLabel,
  setYearLabel,
}: {
  monthFont: Font;
  setMonthFont: React.Dispatch<React.SetStateAction<Font>>;
  monthSize: number;
  setMonthSize: React.Dispatch<React.SetStateAction<number>>;
  monthLabel: string;
  setMonthLabel: React.Dispatch<React.SetStateAction<MonthLabel>>;
  yearLabel: string;
  setYearLabel: React.Dispatch<React.SetStateAction<YearLabel>>;
  setWeekdaySize: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <Box>
        <CardHeader>Month and year style</CardHeader>
        <CardBody className="gap-4">
          <Select
            label="Font style"
            placeholder="Select a font style"
            value={monthFont}
            onChange={(event) => setMonthFont(event.target.value as Font)}
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
            value={String(monthSize)}
            onChange={(event) => setMonthSize(Number(event.target.value))}
          >
            {monthSize}
          </Input>
          <Select
            label="Month label"
            placeholder="Select month label size"
            value={monthLabel}
            onChange={(event) =>
              setMonthLabel(event.target.value as MonthLabel)
            }
          >
            {["numeric", "2-digit", "long", "short", "narrow"].map((type) => (
              <SelectItem key={type} className={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </Select>
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
        </CardBody>
      </Box>
    </>
  );
}

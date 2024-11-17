import {
  CardBody,
  CardHeader,
  Checkbox,
  Chip,
  Input,
  RadioGroup,
  Select,
  SelectItem,
  SelectSection,
  cn,
} from "@nextui-org/react";

import Radio from "../radio-button";
import Box from "../box";

import {
  Font,
  MonthLabel,
  WeekdayLabel,
  WeekdayStart,
  YearLabel,
} from "@/types";
import { mainFonts, otherFonts } from "@/helpers/fonts";

export default function StyleSelect({
  monthFont,
  setMonthFont,
  monthSize,
  setMonthSize,
  weekdayFont,
  setWeekdayFont,
  weekdaySize,
  setWeekdaySize,
  start,
  setStart,
  weekdayLabel,
  setWeekdayLabel,
  monthLabel,
  setMonthLabel,
  yearLabel,
  setYearLabel,
}: {
  monthFont: Font;
  setMonthFont: React.Dispatch<React.SetStateAction<Font>>;
  monthSize: number;
  setMonthSize: React.Dispatch<React.SetStateAction<number>>;
  weekdayFont: Font;
  setWeekdayFont: React.Dispatch<React.SetStateAction<Font>>;
  weekdaySize: number;
  start: string;
  setStart: React.Dispatch<React.SetStateAction<WeekdayStart>>;
  weekdayLabel: WeekdayLabel;
  setWeekdayLabel: React.Dispatch<React.SetStateAction<WeekdayLabel>>;
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

import { Select, SelectItem, SelectSection } from "@nextui-org/react";

import { mainFonts, otherFonts } from "@/helpers/fonts";
import { Font } from "@/types";

export default function FontSelect({
  monthFont,
  setMonthFont,
  monthSize,
  setMonthSize,
  weekdayFont,
  setWeekdayFont,
  weekdaySize,
  setWeekdaySize,
}: {
  monthFont: Font;
  setMonthFont: React.Dispatch<React.SetStateAction<Font>>;
  monthSize: number;
  setMonthSize: React.Dispatch<React.SetStateAction<number>>;
  weekdayFont: Font;
  setWeekdayFont: React.Dispatch<React.SetStateAction<Font>>;
  weekdaySize: number;
  setWeekdaySize: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <Select
        label="Month font style"
        placeholder="Select a font style"
        value={monthFont}
        onChange={(event) => setMonthFont(event.target.value as Font)}
      >
        <SelectSection showDivider>
          {mainFonts.map((font) => (
            <SelectItem key={font.key} className={font.key} value={font.value}>
              {font.label}
            </SelectItem>
          ))}
        </SelectSection>
        <SelectSection>
          {otherFonts.map((font) => (
            <SelectItem key={font.key} className={font.key} value={font.value}>
              {font.label}
            </SelectItem>
          ))}
        </SelectSection>
      </Select>
      <Select
        label="Font style"
        placeholder="Select a font style"
        value={weekdayFont}
        onChange={(event) => setWeekdayFont(event.target.value as Font)}
      >
        <SelectSection showDivider>
          {mainFonts.map((font) => (
            <SelectItem key={font.key} className={font.key} value={font.value}>
              {font.label}
            </SelectItem>
          ))}
        </SelectSection>
        <SelectSection>
          {otherFonts.map((font) => (
            <SelectItem key={font.key} className={font.key} value={font.value}>
              {font.label}
            </SelectItem>
          ))}
        </SelectSection>
      </Select>
    </>
  );
}

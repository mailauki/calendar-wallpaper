import { Select, SelectItem, SelectSection } from "@nextui-org/react";

import { mainFonts, otherFonts } from "@/helpers/fonts";

export default function FontSelect() {
  return (
    <>
      <Select label="Font style" placeholder="Select a font style">
        <SelectSection showDivider>
          {mainFonts.map((font) => (
            <SelectItem key={font.key} className={font.key}>
              {font.label}
            </SelectItem>
          ))}
        </SelectSection>
        <SelectSection>
          {otherFonts.map((font) => (
            <SelectItem key={font.key} className={font.key}>
              {font.label}
            </SelectItem>
          ))}
        </SelectSection>
      </Select>
    </>
  );
}

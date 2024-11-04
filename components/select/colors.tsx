// import "@/styles/color-picker.css";

import { Divider, Input } from "@nextui-org/react";
import { getContrastRatio, getContrastColor, RGB } from "a11y-contrast-color";
import { hex2rgb, rgb2hex } from "@nextcss/color-tools";

export default function ColorsSelect({
  bgColor,
  setBgColor,
  setTextColor,
  textColor,
}: {
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
}) {
  const color1 = hex2rgb(bgColor) as RGB;
  const color2 = hex2rgb(textColor) as RGB;
  const contrastRatio = getContrastRatio(color1, color2);
  const contrastColor1 = getContrastColor(color1, 4.5);
  const contrastColor2 = getContrastColor(color2, 4.5);
  const contrastBgColor = rgb2hex(contrastColor1 as number[]);
  const contrastTextColor = rgb2hex(contrastColor2 as number[]);

  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 gap-2">
        <div className="flex flex-col items-center gap-1 w-1/2">
          <Input
            classNames={{
              label: "text-xs text-default-500",
              helperWrapper: "p-0",
              mainWrapper: "gap-none",
              inputWrapper: "rounded-b-none border-b",
            }}
            description={
              <Input
                classNames={{
                  inputWrapper: "rounded-t-none border-t",
                }}
                errorMessage={`Try ${contrastBgColor}`}
                isInvalid={contrastRatio < 4.5}
                type="text"
                value={bgColor}
                variant="bordered"
                onValueChange={setBgColor}
              />
            }
            isInvalid={contrastRatio < 4.5}
            label="Background Color"
            labelPlacement="outside"
            type="color"
            value={bgColor}
            variant="bordered"
            onValueChange={setBgColor}
          />
        </div>

        <Divider className="h-16" orientation="vertical" />

        <div className="flex flex-col items-center gap-1 w-1/2">
          <Input
            classNames={{
              label: "text-xs text-default-500",
              helperWrapper: "p-0",
              mainWrapper: "gap-none",
              inputWrapper: "rounded-b-none border-b",
            }}
            description={
              <Input
                classNames={{
                  inputWrapper: "rounded-t-none border-t",
                }}
                errorMessage={`Try ${contrastTextColor}`}
                isInvalid={contrastRatio < 4.5}
                type="text"
                value={textColor}
                variant="bordered"
                onValueChange={setTextColor}
              />
            }
            isInvalid={contrastRatio < 4.5}
            label="Text Color"
            labelPlacement="outside"
            type="color"
            value={textColor}
            variant="bordered"
            onValueChange={setTextColor}
          />
        </div>
      </div>
    </>
  );
}

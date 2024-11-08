import "@/styles/color-picker.css";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
// import { getContrastRatio, getContrastColor, RGB } from "a11y-contrast-color";
// import { hex2rgb, rgb2hex } from "@nextcss/color-tools";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import React from "react";
extend([namesPlugin]);

export default function ColorInput({
  index,
  color,
  setColor,
  updateColor,
  removeColor,
  showRemove,
}: {
  index?: number;
  color: string;
  updateColor?: any;
  setColor?: any;
  removeColor?: any;
  showRemove: boolean;
}) {
  const colorName = colord(color).toName();
  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <div className="w-full flex flex-col gap-1">
      <div key={color} className="flex items-center gap-3">
        <Input
          // isInvalid={contrastRatio < 4.5}
          aria-label={`background color ${index}`}
          className="w-fit"
          classNames={{
            inputWrapper: "rounded-full p-1 h-[32px] w-[32px]",
            // innerWrapper: "h-[10px] w-[10px]",
          }}
          radius="full"
          size="sm"
          type="color"
          value={color}
          onChange={updateColor}
          onValueChange={setColor}
        />
        <Input
          // isInvalid={contrastRatio < 4.5}
          radius="full"
          size="sm"
          type="text"
          value={color.toLowerCase()}
          onChange={updateColor}
        />
        <Button
          radius="full"
          size="sm"
          variant="flat"
          onPress={() => {
            navigator.clipboard.writeText(color);
            setIsCopied(!isCopied);
          }}
        >
          {isCopied ? "Copied" : "Copy"}
        </Button>
        {showRemove && (
          <Button
            isIconOnly
            radius="full"
            size="sm"
            variant="flat"
            onPress={removeColor}
          >
            X
          </Button>
        )}
      </div>
      <p className="text-tiny px-2">{colorName}</p>
    </div>
  );
}

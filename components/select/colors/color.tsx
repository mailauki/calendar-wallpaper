import "@/styles/color-picker.css";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
// import { getContrastRatio, getContrastColor, RGB } from "a11y-contrast-color";
// import { hex2rgb, rgb2hex } from "@nextcss/color-tools";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import React from "react";
import { Snippet } from "@nextui-org/snippet";
import { Chip } from "@nextui-org/react";
import { BsXLg as RemoveIcon } from "react-icons/bs";
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

  return (
    <div key={color} className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Input
          aria-label={`background color ${index}`}
          className="w-fit"
          classNames={{
            inputWrapper: "rounded-full p-1 h-[32px] w-[32px]",
          }}
          radius="full"
          size="sm"
          type="color"
          value={color}
          onChange={updateColor}
          onValueChange={setColor}
        />
        <Snippet
          className="rounded-full text-small py-0 ps-3"
          radius="lg"
          size="sm"
          symbol=""
        >
          {color.toLowerCase()}
        </Snippet>
        <Chip className="text-tiny" size="lg" variant="light">
          {colorName}
        </Chip>
      </div>
      <div className="flex items-center gap-3">
        {showRemove && (
          <Button
            isIconOnly
            radius="full"
            size="sm"
            variant="flat"
            onPress={removeColor}
          >
            <RemoveIcon />
          </Button>
        )}
      </div>
    </div>
  );
}

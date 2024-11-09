import "@/styles/color-picker.css";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
// import { getContrastRatio, getContrastColor, RGB } from "a11y-contrast-color";
// import { hex2rgb, rgb2hex } from "@nextcss/color-tools";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import React from "react";
import { Snippet } from "@nextui-org/snippet";
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
    <div className="w-full flex flex-col gap-1">
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
            className="rounded-full text-small ps-3"
            radius="lg"
            size="sm"
            symbol=""
          >
            {color.toLowerCase()}
          </Snippet>
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
              X
            </Button>
          )}
        </div>
      </div>
      <p className="text-tiny px-1">{colorName}</p>
    </div>
  );
}

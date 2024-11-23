"use client";

import "@/styles/color-picker.css";

import React from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Snippet } from "@nextui-org/snippet";
import { Chip } from "@nextui-org/react";
import { BsXLg as RemoveIcon } from "react-icons/bs";
import { GetColorName } from "hex-color-to-color-name";

import { dehashHex } from "@/helpers";

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
  updateColor?: (event: { currentTarget: { value: string } }) => void;
  setColor?: React.Dispatch<React.SetStateAction<string>>;
  removeColor?: any;
  showRemove: boolean;
}) {
  const colorName = GetColorName(dehashHex(color));

  return (
    <div>
      <div key={color} className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {index ? (
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
            />
          ) : (
            <Input
              aria-label="text color"
              className="w-fit"
              classNames={{
                inputWrapper: "rounded-full p-1 h-[32px] w-[32px]",
              }}
              radius="full"
              size="sm"
              type="color"
              value={color}
              onValueChange={setColor}
            />
          )}
          <Snippet
            className="rounded-full text-small py-0 ps-3"
            radius="lg"
            size="sm"
            symbol=""
          >
            {color.toUpperCase()}
          </Snippet>
          <div>
            <Chip className="text-tiny" size="lg" variant="light">
              {colorName}
            </Chip>
          </div>
        </div>
        <div className="flex items-center">
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
    </div>
  );
}

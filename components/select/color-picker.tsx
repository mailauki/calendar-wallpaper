"use client";

import "@/styles/color-picker.css";

import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  CardHeader,
  CardBody,
  Card,
  Snippet,
} from "@nextui-org/react";
import { GetColorName } from "hex-color-to-color-name";

import { dehashHex, rehashHex } from "@/helpers";
// import { BsPaletteFill as PaletteIcon } from "react-icons/bs";

export default function ColorPicker({
  index,
  color,
  updateColor,
}: {
  index?: number;
  color: string;
  updateColor: any;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputColor, setInputColor] = React.useState(dehashHex(color));
  const validateHexCode = (hex: string) =>
    hex.match("^#(?:[0-9a-fA-F]{3}){1,2}$");

  const isInvalid = React.useMemo(() => {
    if (inputColor === "") return false;

    return validateHexCode(rehashHex(inputColor)) ? false : true;
  }, [inputColor]);

  React.useEffect(() => {
    setInputColor(dehashHex(color));
  }, [color]);

  return (
    <div className="flex flex-row items-center gap-2 p-1">
      <Popover
        isOpen={isOpen}
        placement="bottom"
        onOpenChange={(open) => {
          setIsOpen(open);
          updateColor(rehashHex(inputColor), index);
        }}
      >
        <PopoverTrigger>
          <Button
            isIconOnly
            color="default"
            style={{
              background: `${color}`,
            }}
            variant="solid"
          >
            {/* <PaletteIcon /> */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-1">
          <Card
            className="min-w-[300px] max-w-md border-none bg-transparent"
            shadow="none"
          >
            <CardHeader>{GetColorName(inputColor)}</CardHeader>
            <CardBody className="flex-row gap-2">
              <Input
                className="w-fit"
                classNames={{
                  inputWrapper: "rounded-full p-1 h-[40px] w-[40px]",
                }}
                radius="full"
                type="color"
                value={rehashHex(inputColor)}
                onValueChange={(value) => setInputColor(dehashHex(value))}
              />
              <Input
                errorMessage="Must be valid hex code"
                isInvalid={isInvalid}
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">#</span>
                  </div>
                }
                value={inputColor.toUpperCase()}
                onValueChange={setInputColor}
              />
            </CardBody>
          </Card>
        </PopoverContent>
      </Popover>
      <Snippet
        className="w-fit"
        classNames={{ pre: "font-sans" }}
        symbol="#"
        variant="solid"
      >
        {dehashHex(color).toUpperCase()}
      </Snippet>
      <p className="px-4 text-default-500 text-small">
        {GetColorName(dehashHex(color))}
      </p>
    </div>
  );
}

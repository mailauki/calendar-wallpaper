import "@/styles/color-picker.css";

import {
  CardBody,
  CardHeader,
  Button,
  Tabs,
  Tab,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import React from "react";
extend([a11yPlugin]);

import ColorButton from "./button";
import ColorInput from "./color";

import Box from "@/components/box";
import { ColorProps } from "@/types";
import { colors, reverseColors } from "@/helpers/colors";

export default function ColorsSelect({
  bgColor,
  setBgColor,
  setTextColor,
  textColor,
}: ColorProps) {
  // const color1 = hex2rgb(bgColor[0] as string) as RGB;
  // const color2 = hex2rgb(textColor) as RGB;
  // const contrastRatio = getContrastRatio(color1, color2);
  const isReadable = colord(textColor).isReadable(bgColor[0]);
  // const contrastColor1 = getContrastColor(color1, 4.5);
  // const contrastColor2 = getContrastColor(color2, 4.5);
  // const contrastBgColor = rgb2hex(contrastColor1 as number[]);
  // const contrastTextColor = rgb2hex(contrastColor2 as number[]);
  const [swap, setSwap] = React.useState(false);

  // Update an item at a specific index
  const updateBgColor = (index: number, newValue: string) => {
    setBgColor((prevArray) => {
      const newArray = [...prevArray];

      newArray[index] = newValue;

      return newArray;
    });
  };

  // Remove an item at a specific index
  const removeBgColor = (index: number) => {
    setBgColor((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <Box>
          <CardHeader className="flex justify-between gap-1">
            Themes
            <Button
              radius="full"
              size="sm"
              variant="flat"
              onPress={() => {
                setSwap(!swap);
                setBgColor([textColor]);
                setTextColor(bgColor[0]);
              }}
            >
              Swap
            </Button>
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap items-center justify-between gap-3">
              {(swap ? reverseColors : colors).map((color, index) => (
                <ColorButton
                  key={index}
                  bgColor={color.bg}
                  setBgColor={setBgColor}
                  setTextColor={setTextColor}
                  textColor={color.text}
                >
                  {index + 1}
                </ColorButton>
              ))}
            </div>
          </CardBody>
        </Box>
        <Box>
          <CardHeader className="flex items-center justify-between gap-1">
            Text
            {!isReadable && (
              <Chip
                className="pe-2"
                color={bgColor.length > 1 ? "warning" : "danger"}
                size="sm"
                startContent={<p className="px-2">!</p>}
                variant="flat"
              >
                Not readable
              </Chip>
            )}
          </CardHeader>
          <CardBody>
            <div className="flex items-center gap-3">
              <ColorInput
                color={textColor}
                setColor={setTextColor}
                showRemove={false}
              />
            </div>
          </CardBody>
        </Box>
        <Box>
          <CardHeader className="flex flex-col items-start justify-between gap-1">
            Background
            {!isReadable && bgColor.length > 1 && (
              <Chip
                className="pe-2"
                color="warning"
                size="sm"
                startContent={<p className="px-2">!</p>}
                variant="flat"
              >
                Gradient backgrounds may make the calendar harder to read
              </Chip>
            )}
          </CardHeader>
          <CardBody>
            <Tabs fullWidth aria-label="Background options">
              <Tab key="bg-color" title="Color">
                <div className="flex flex-col gap-3">
                  {bgColor.map((color, index) => (
                    <ColorInput
                      key={index}
                      color={color}
                      index={index}
                      removeColor={() => removeBgColor(index)}
                      showRemove={bgColor.length > 1}
                      updateColor={(event: {
                        currentTarget: { value: string };
                      }) => updateBgColor(index, event.currentTarget.value)}
                    />
                  ))}
                </div>
              </Tab>
              <Tab key="bg-image" title="Image">
                <></>
              </Tab>
            </Tabs>
          </CardBody>
          <CardFooter>
            <Button
              radius="full"
              size="sm"
              variant="flat"
              // onPress={() => setNumber(number + 1)}
              onPress={() => setBgColor([...bgColor, "#000000"])}
            >
              Add
            </Button>
          </CardFooter>
        </Box>
      </div>
    </>
  );
}

import "@/styles/color-picker.css";

import {
  CardBody,
  Card,
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

import ColorButton from "../button";
import ColorInput from "../color";

import { ColorProps } from "@/types";

// export const Input = (props: InputProps) => {
//   const { children, ...otherProps } = props;

//   return (
//     <Input
//       {...otherProps}
//       classNames={{
//         label: "text-xs text-default-500",
//         helperWrapper: "p-0",
//         mainWrapper: "gap-none",
//         inputWrapper: "rounded-b-none border-b py-2 px-4",
//       }}
//       description={
//         <Input
//           classNames={{
//             inputWrapper: "rounded-t-none border-t py-2 px-4",
//           }}
//           type="text"
//         />
//       }
//       type="color"
//     />
//   );
// };

// export const Button = (
//   props: ButtonProps & {
//     bgColor: string;
//     setBgColor: React.Dispatch<React.SetStateAction<string>>;
//     setTextColor: React.Dispatch<React.SetStateAction<string>>;
//     textColor: string;
//   },
//   // {children,
//   //   bgColor,
//   //   textColor,
//   //   setBgColor,
//   //   setTextColor,
//   // }: {
//   // 	...ButtonProps;
//   //   bgColor: string;
//   //   setBgColor: React.Dispatch<React.SetStateAction<string>>;
//   //   setTextColor: React.Dispatch<React.SetStateAction<string>>;
//   //   textColor: string;
//   // },
// ) => {
//   const {
//     children,
//     bgColor,
//     textColor,
//     setBgColor,
//     setTextColor,
//     ...otherProps
//   } = props;

//   return (
//     <Button
//       {...otherProps}
//       radius="full"
//       size="sm"
//       style={{ backgroundColor: bgColor, color: textColor }}
//       variant="solid"
//       onPress={() => {
//         setBgColor(bgColor);
//         setTextColor(textColor);
//       }}
//     >
//       {children}
//     </Button>
//   );
// };

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
  const colors = [
    { bg: ["#ebebeb"], text: "#000000" },
    { bg: ["#111111"], text: "#ebebeb" },
    { bg: ["#263e0f"], text: "#c7976f" },
    { bg: ["#ffecd5"], text: "#02197f" },
    { bg: ["#874efe"], text: "#ffffff" },
    { bg: ["#561029"], text: "#fecb3e" },
    { bg: ["#f9d3e0"], text: "#38571a" },
    { bg: ["#450e59"], text: "#e4ef65" },
    { bg: ["#00364a"], text: "#ff9300" },
    { bg: ["#831100"], text: "#d6d6d6" },
    { bg: ["#e66465", "#9198e5"], text: "#ffffff" },
    {
      bg: ["#02197f", "#9198e5", "#ffc677", "#ff8647"],
      text: "#000000",
    },
  ];
  const reverseColors = [
    { bg: ["#000000"], text: "#ebebeb" },
    { bg: ["#ebebeb"], text: "#111111" },
    { bg: ["#c7976f"], text: "#263e0f" },
    { bg: ["#02197f"], text: "#ffecd5" },
    { bg: ["#ffffff"], text: "#874efe" },
    { bg: ["#fecb3e"], text: "#561029" },
    { bg: ["#38571a"], text: "#f9d3e0" },
    { bg: ["#e4ef65"], text: "#450e59" },
    { bg: ["#ff9300"], text: "#00364a" },
    { bg: ["#d6d6d6"], text: "#831100" },
    { bg: ["#9198e5", "#e66465"], text: "#ffffff" },
    {
      bg: ["#ff8647", "#ffc677", "#9198e5", "#02197f"],
      text: "#000000",
    },
  ];
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
        <Card>
          <CardHeader className="flex justify-between gap-1">
            Themes
            <Button
              radius="full"
              size="sm"
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
        </Card>
        <Card>
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
        </Card>
        <Card>
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
        </Card>
      </div>
    </>
  );
}

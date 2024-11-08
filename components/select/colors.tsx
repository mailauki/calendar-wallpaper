import "@/styles/color-picker.css";

import {
  Input,
  CardBody,
  Card,
  CardHeader,
  Button,
  Tabs,
  Tab,
  CardFooter,
} from "@nextui-org/react";
import React from "react";

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
  // const contrastColor1 = getContrastColor(color1, 4.5);
  // const contrastColor2 = getContrastColor(color2, 4.5);
  // const contrastBgColor = rgb2hex(contrastColor1 as number[]);
  // const contrastTextColor = rgb2hex(contrastColor2 as number[]);
  const colors = [
    { bg: ["#ebebeb"], text: "#000000" },
    { bg: ["#111111"], text: "#ebebeb" },
    { bg: ["#0061ff"], text: "#ffffff" },
    { bg: ["#ffecd5"], text: "#02197f" }, // {bg:"#fff6eb", text: "#0433ff"}
    { bg: ["#874efe"], text: "#ffffff" },
    { bg: ["#561029"], text: "#fecb3e" },
    { bg: ["#f9d3e0"], text: "#38571a" },
    { bg: ["#450e59"], text: "#e4ef65" },
    { bg: ["#00364a"], text: "#ff9300" },
    { bg: ["#d95000"], text: "#94e3fe" },
    { bg: ["#e66465", "#9198e5"], text: "#ffffff" },
    {
      bg: ["#02197f", "#9198e5", "#ffc677", "#ff8647"],
      text: "#000000",
    },
  ];
  const reverseColors = [
    { bg: ["#000000"], text: "#ebebeb" },
    { bg: ["#ebebeb"], text: "#111111" },
    { bg: ["#ffffff"], text: "#0061ff" },
    { bg: ["#02197f"], text: "#ffecd5" }, // {bg:"#fff6eb", text: "#0433ff"}
    { bg: ["#ffffff"], text: "#874efe" },
    { bg: ["#fecb3e"], text: "#561029" },
    { bg: ["#38571a"], text: "#f9d3e0" },
    { bg: ["#e4ef65"], text: "#450e59" },
    { bg: ["#ff9300"], text: "#00364a" },
    { bg: ["#94e3fe"], text: "#d95000" },
    { bg: ["#9198e5", "#e66465"], text: "#ffffff" },
    {
      bg: ["#ff8647", "#ffc677", "#9198e5", "#02197f"],
      text: "#000000",
    },
  ];
  const [swap, setSwap] = React.useState(false);

  // Add a new item to the array
  const addBgColor = (newItem: string) => {
    setBgColor((prevArray) => [...prevArray, newItem]);
  };

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
          <CardHeader className="flex justify-between">
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
          <CardHeader className="flex items-center justify-between">
            Text
          </CardHeader>
          <CardBody>
            <div className="flex items-center gap-3">
              {/* <Input
                className="w-40"
                // isInvalid={contrastRatio < 4.5}
                radius="full"
                type="color"
                value={textColor}
                onValueChange={setTextColor}
              />
              <Input
                // isInvalid={contrastRatio < 4.5}
                radius="full"
                type="text"
                value={textColor.toLowerCase()}
                onValueChange={setTextColor}
              /> */}
              <ColorInput
                color={textColor}
                setColor={setTextColor}
                showRemove={false}
              />
              {/* <p className="text-small w-2/3">Color name</p> */}
              {/* #c8cebb #c18677 */}
              {/* <Button
                radius="full"
                size="sm"
                variant="flat"
                // onPress={() => console.log(textColor)}
              >
                Copy
              </Button> */}
            </div>

            {/* {contrastRatio < 4.5 && (
              <p className="text-tiny text-danger p-2">
                This color doesn&apos;t contrast the background enough, try{" "}
                <b>{contrastTextColor}</b>
              </p>
            )} */}
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            Background
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
                {/* {contrastRatio < 4.5 && (
                  <p className="text-tiny text-danger p-2">
                    This color doesn&apos;t contrast the foreground enough, try{" "}
                    <b>{contrastBgColor}</b>
                  </p>
                )} */}
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

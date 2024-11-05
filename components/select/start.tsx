import React from "react";
import {
  cn,
  Radio as NextUIRadio,
  RadioGroup,
  RadioProps,
} from "@nextui-org/react";

export const Radio = (props: RadioProps) => {
  const { children, ...otherProps } = props;

  return (
    <NextUIRadio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-grow flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
      }}
    >
      {children}
    </NextUIRadio>
  );
};

export default function StartSelect({
  // isSelected,
  // setIsSelected,
  value,
  setValue,
  size,
  setSize,
}: {
  // isSelected: boolean;
  // setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      {/* <Checkbox
        classNames={{
          base: cn(
            "inline-flex w-full min-w-full",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-lg gap-2 m-0 p-4 border-2 border-transparent",
          ),
          label: "w-full",
        }}
        isSelected={isSelected}
        onValueChange={setIsSelected}
      >
        <div className="w-full flex justify-between gap-2">
          {isSelected ? "Sunday" : "Monday"} start
        </div>
      </Checkbox> */}
      <RadioGroup
        className="w-full min-w-full p-4"
        label="Select weekday start"
        orientation="horizontal"
        value={value}
        onValueChange={setValue}
      >
        <Radio key={0} value="sunday">
          Sunday
        </Radio>
        <Radio key={1} value="monday">
          Monday
        </Radio>
      </RadioGroup>
      <RadioGroup
        className="w-full min-w-full p-4"
        label="Select weekday label size"
        orientation="horizontal"
        value={size}
        onValueChange={setSize}
      >
        <Radio description="Ex: S" value="short">
          Short
        </Radio>
        <Radio description="Ex: SUN" value="long">
          Long
        </Radio>
        <Radio description="Ex: SUNDAY" value="full">
          Full
        </Radio>
      </RadioGroup>
    </>
  );
}

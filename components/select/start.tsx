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
          "flex-grow flex-row-reverse min-w-sm max-w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
      }}
    >
      {children}
    </NextUIRadio>
  );
};

export default function StartSelect({
  value,
  setValue,
  size,
  setSize,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
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

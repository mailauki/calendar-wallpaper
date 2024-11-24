"use client";

import React from "react";
import {
  cn,
  Checkbox as NextUICheckbox,
  CheckboxProps,
  Chip,
} from "@nextui-org/react";

type LabelProps = { label: string };

export default function Checkbox(props: CheckboxProps & LabelProps) {
  const { children, label, ...otherProps } = props;

  return (
    <NextUICheckbox
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex w-full min-w-full",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-medium gap-2 m-0 px-4 py-3 border-2 border-transparent",
        ),
        label: "w-full",
      }}
    >
      <div className="w-full flex justify-between gap-2">
        {label}
        <Chip variant="flat">{children}</Chip>
      </div>
    </NextUICheckbox>
  );
}

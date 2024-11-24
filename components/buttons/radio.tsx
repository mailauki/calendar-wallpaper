"use client";

import React from "react";
import { cn, Radio as NextUIRadio, RadioProps } from "@nextui-org/react";

export default function Radio(props: RadioProps) {
  const { children, ...otherProps } = props;

  return (
    <NextUIRadio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-grow flex-row-reverse min-w-sm max-w-full cursor-pointer rounded-large gap-4 p-3 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
      }}
    >
      {children}
    </NextUIRadio>
  );
}

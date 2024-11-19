/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Input } from "@nextui-org/input";

import { BgImageProps } from "@/types";

export default function ImageSelect({ bgImage, setBgImage }: BgImageProps) {
  return (
    <Input
      isClearable
      accept="image/png, image/jpeg"
      label="Image"
      type="file"
      variant="flat"
      // eslint-disable-next-line no-console
      onClear={() => console.log("input cleared")}
    />
  );
}

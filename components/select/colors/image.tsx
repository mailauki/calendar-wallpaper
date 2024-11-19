"use client";

import React from "react";
import { Input } from "@nextui-org/input";

import { BgImageProps } from "@/types";

export default function ImageSelect({ bgImage, setBgImage }: BgImageProps) {
  return (
    <Input
      isClearable
      accept="image/png, image/jpeg"
      classNames={{ label: "hidden" }}
      label="Image"
      type="file"
      value={bgImage}
      variant="flat"
      onChange={(event) => setBgImage(event.target.value)}
      onClear={() => setBgImage(undefined)}
    />
  );
}

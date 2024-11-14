import { RadioGroup } from "@nextui-org/react";
import React from "react";

import Radio from "../radio-button";

import { sizes } from "@/helpers/sizes";
import { AspectRatio, WallpaperQuality } from "@/types";
import { getWxH } from "@/helpers";

export default function SizeSelect({
  setSize,
  ratio,
  setRatio,
}: {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  ratio: string;
  setRatio: React.Dispatch<React.SetStateAction<AspectRatio>>;
}) {
  const [index, setIndex] = React.useState<string>("0");

  React.useEffect(() => {
    setSize(getWxH(sizes[ratio as AspectRatio][Number(index)]));
  }, [ratio, index]);

  const layout = { "16:9": "Landscape", "9:16": "Portrait", "1:1": "Square" };
  const quality: WallpaperQuality[] = ["4K", "QHD", "FHD", "HD", "SD"];

  return (
    <>
      <RadioGroup
        className="w-full min-w-full p-4"
        label="Select aspect ratio"
        orientation="horizontal"
        value={ratio}
        onValueChange={(value: string) => setRatio(value as AspectRatio)}
      >
        {Object.keys(sizes).map((ratio) => (
          <Radio key={ratio} description={ratio} value={ratio}>
            {layout[ratio as AspectRatio]}
          </Radio>
        ))}
      </RadioGroup>

      <RadioGroup
        className="w-full min-w-full p-4"
        label="Select wallpaper size/quality"
        orientation="horizontal"
        value={index}
        onValueChange={setIndex}
      >
        {sizes[ratio as AspectRatio].map((size, index) => (
          <Radio key={index} description={quality[index]} value={String(index)}>
            {getWxH(size)}
          </Radio>
        ))}
      </RadioGroup>
    </>
  );
}

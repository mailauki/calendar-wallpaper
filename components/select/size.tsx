"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  RadioGroup,
} from "@nextui-org/react";

import Radio from "@/components/buttons/radio";
import { sizes } from "@/helpers/sizes";
import { AspectRatio, WallpaperQuality } from "@/types";
import { getWxH } from "@/helpers";

export default function SizeSelect({
  size,
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
      {index !== "0" && (
        <CardHeader>
          <Chip
            className="pe-2"
            color="warning"
            size="sm"
            startContent={<p className="px-2">!</p>}
            variant="flat"
          >
            Recommended to change font size for lower quality
          </Chip>
        </CardHeader>
      )}
      <CardBody>
        <RadioGroup
          className="w-full min-w-full"
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
          className="w-full min-w-full"
          label="Select wallpaper size/quality"
          orientation="horizontal"
          value={index}
          onValueChange={setIndex}
        >
          {sizes[ratio as AspectRatio].map((size, index) => (
            <Radio
              key={index}
              description={quality[index]}
              value={String(index)}
            >
              {getWxH(size)}
            </Radio>
          ))}
        </RadioGroup>
      </CardBody>
      <CardFooter>
        <Accordion variant="bordered">
          <AccordionItem
            key="custom"
            aria-label="Custom size"
            title="Custom size"
          >
            <div className="flex flex-row gap-4">
              <Input
                label="Width"
                labelPlacement="outside"
                type="number"
                value={size.split("x")[0]}
                variant="bordered"
                onValueChange={(value) =>
                  setSize(
                    getWxH(
                      Object.assign({
                        width: value,
                        height: size.split("x")[1],
                      }),
                    ),
                  )
                }
              />
              <Input
                label="Height"
                labelPlacement="outside"
                type="number"
                value={size.split("x")[1]}
                variant="bordered"
                onValueChange={(value) =>
                  setSize(
                    getWxH(
                      Object.assign({
                        width: size.split("x")[0],
                        height: value,
                      }),
                    ),
                  )
                }
              />
            </div>
          </AccordionItem>
        </Accordion>
        {/* <Input
          label="Width"
          labelPlacement="outside"
          type="number"
          value={size.split("x")[0]}
          variant="bordered"
        />
        <Input
          label="Height"
          labelPlacement="outside"
          type="number"
          value={size.split("x")[1]}
          variant="bordered"
        /> */}
      </CardFooter>
    </>
  );
}

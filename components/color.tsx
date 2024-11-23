"use client";

import { Card, CardBody, Snippet } from "@nextui-org/react";
import { GetColorName } from "hex-color-to-color-name";

import { dehashHex } from "@/helpers";

export default function Color({ color }: { color: string }) {
  return (
    <Card fullWidth isPressable style={{ background: `${color}` }}>
      <CardBody className="pt-16 gap-2">
        {/* <Button
				className="font-semibold w-fit"
				variant="solid"
				// eslint-disable-next-line no-undef
				onPress={() => navigator.clipboard.writeText(inputColor)}
			>
				{dehashHex(color)}
			</Button> */}
        <Snippet
          className="w-fit"
          classNames={{ pre: "font-sans" }}
          symbol="#"
          variant="solid"
        >
          {dehashHex(color)}
        </Snippet>
        <p className="px-4 text-default-500 text-small">
          {GetColorName(dehashHex(color))}
        </p>
      </CardBody>
    </Card>
  );
}

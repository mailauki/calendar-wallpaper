import "@/styles/color-picker.css";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function ColorInput({
  index,
  color,
  updateColor,
  removeColor,
}: {
  index: number;
  color: string;
  updateColor: any;
  removeColor: any;
}) {
  return (
    <div key={color} className="flex items-center gap-3">
      <Input
        // isInvalid={contrastRatio < 4.5}
        aria-label={`background color ${index}`}
        className="w-40"
        // classNames={{
        //   inputWrapper: "rounded-full",
        //   base: "w-[30px]",
        // }}
        radius="full"
        type="color"
        value={color}
        onChange={updateColor}
      />
      <Input
        // isInvalid={contrastRatio < 4.5}
        radius="full"
        type="text"
        value={color.toLowerCase()}
        onChange={updateColor}
      />
      {/* <p className="text-small w-2/3">{color}</p> */}
      <Button
        radius="full"
        size="sm"
        variant="flat"
        // onPress={() => console.log(color)}
      >
        Copy
      </Button>
      <Button
        isIconOnly
        radius="full"
        size="sm"
        variant="flat"
        onPress={removeColor}
      >
        X
      </Button>
    </div>
  );
}

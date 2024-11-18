import { Button } from "@nextui-org/button";

import { ColorProps } from "@/types";

export default function ColorButton({
  children,
  bgColor,
  setBgColor,
  setTextColor,
  textColor,
}: {
  children: React.ReactNode;
} & ColorProps) {
  const gradient = bgColor.join(", ");

  return (
    <Button
      className="grow"
      radius="full"
      size="sm"
      style={{
        background:
          bgColor.length > 1
            ? `linear-gradient(217deg, ${gradient})`
            : `${bgColor[0]}`,
        color: textColor,
      }}
      variant="solid"
      onPress={() => {
        setBgColor(bgColor);
        setTextColor(textColor);
      }}
    >
      {children}
    </Button>
  );
}

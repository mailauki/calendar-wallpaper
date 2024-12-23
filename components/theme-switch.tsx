"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
    </Component>
  );
};

// import { VisuallyHidden } from "@react-aria/visually-hidden";
// import { Switch, SwitchProps, useSwitch } from "@nextui-org/switch";

// import {
//   SunFilledIcon as SunIcon,
//   MoonFilledIcon as MoonIcon,
// } from "@/components/icons";

// export function ThemeSwitch(props: SwitchProps) {
//   const {
//     Component,
//     slots,
//     isSelected,
//     getBaseProps,
//     getInputProps,
//     getWrapperProps,
//   } = useSwitch(props);

//   return (
//     <div className="flex flex-col gap-2">
//       <Component {...getBaseProps()}>
//         <VisuallyHidden>
//           <input {...getInputProps()} />
//         </VisuallyHidden>
//         <div
//           {...getWrapperProps()}
//           className={slots.wrapper({
//             class: [
//               "w-8 h-8",
//               "flex items-center justify-center",
//               // "rounded-lg bg-default-100 hover:bg-default-200",
//               "bg-transparent",
//             ],
//           })}
//         >
//           {isSelected ? <SunIcon /> : <MoonIcon />}
//         </div>
//       </Component>
//     </div>
//   );
// }

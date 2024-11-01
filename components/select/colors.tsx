// import "@/styles/color-picker.css";

import { Divider } from "@nextui-org/react";

export default function ColorsSelect() {
  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 gap-2">
        <div className="flex flex-col items-center gap-1 w-1/2">
          <input
            className="p-1 h-10 w-14 inline-block bg-background border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 hover:border-gray-300 hover:dark:border-neutral-600"
            type="color"
          />
          <p className="text-xs text-default-500">Background Color</p>
        </div>

        <Divider className="h-16" orientation="vertical" />

        <div className="flex flex-col items-center gap-1 w-1/2">
          <input
            className="p-1 h-10 w-14 inline-block bg-background border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 hover:border-gray-300 hover:dark:border-neutral-600"
            type="color"
          />
          <p className="text-xs text-default-500">Text Color</p>
        </div>
      </div>
    </>
  );
}

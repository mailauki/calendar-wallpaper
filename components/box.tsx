import { Card } from "@nextui-org/react";
import React from "react";

export default function Box({
  children,
}: {
  children: React.ReactNode;
  description?: string;
  span?: string;
}) {
  return (
    // <div className={`flex flex-col gap-2 ${span}`}>
    //   <div className="border-small rounded-small border-default-200 dark:border-default-100">
    //     {children}
    //   </div>
    //   <p className="text-xs text-default-500">{description}</p>
    // </div>
    // <div className="w-full border-small rounded-small border-default-200 dark:border-default-100">
    //   {children}
    // </div>
    <Card className="border-none" radius="md">
      {children}
    </Card>
  );
}

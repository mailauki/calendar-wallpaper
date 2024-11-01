import React from "react";

export default function Box({
  children,
  description,
}: {
  children: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[260px] border-small rounded-small border-default-200 dark:border-default-100">
        {children}
      </div>
      <p className="text-xs text-default-500">{description}</p>
    </div>
  );
}

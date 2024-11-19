"use client";

import React from "react";
import { Card, CardFooter, Image, CardBody, Skeleton } from "@nextui-org/react";

export default function LoadingPreview() {
  return (
    <Card isFooterBlurred className="overflow-hidden">
      <CardBody className="items-center">
        <Image
          alt="Loading..."
          height={440}
          isLoading={true}
          src="/"
          style={{
            aspectRatio: "16:9",
            objectFit: "cover",
          }}
          width={784}
        />
      </CardBody>
      <CardFooter className="justify-between gap-4">
        <Skeleton className="w-2/5 h-10 rounded-full" />
        <Skeleton className="w-1/5 h-10 rounded-full" />
      </CardFooter>
    </Card>
  );
}

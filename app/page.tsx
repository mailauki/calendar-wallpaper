import { Button } from "@nextui-org/button";

import SelectOptions from "@/components/select-options";

export default function Home() {
  return (
    <section className="mx-auto max-w-xl flex flex-col items-center justify-center gap-4 h-full">
      <SelectOptions />
      <Button as="a" href="/preview" radius="full" variant="light">
        Preview
      </Button>
    </section>
  );
}

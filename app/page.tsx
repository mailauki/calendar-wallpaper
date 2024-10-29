import { Button } from "@nextui-org/button";

import MonthsSelect from "@/components/months";
import YearSelect from "@/components/year";

export default function Home() {
  return (
    <section className="mx-auto max-w-md flex flex-col items-center justify-center gap-4 h-full">
      <MonthsSelect />
      <YearSelect />
      <Button as="a" href="/preview" radius="full" variant="light">
        Preview
      </Button>
    </section>
  );
}

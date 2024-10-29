import { Button } from "@nextui-org/button";

import MonthsSelect from "@/components/months";
import YearSelect from "@/components/year";

export default function Home() {
  return (
    <section className="mx-auto max-w-md flex flex-col items-center justify-center gap-4 h-full">
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
        <MonthsSelect />
        <YearSelect />
      </div>
      <Button as="a" href="/preview" radius="full" variant="light">
        Preview
      </Button>
    </section>
  );
}

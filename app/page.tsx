import { Button } from "@nextui-org/button";

import CalendarSelect from "@/components/calendar";

export default function Home() {
  return (
    <section className="mx-auto max-w-xl flex flex-col items-center justify-center gap-4 h-full">
      <CalendarSelect />
      <Button as="a" href="/preview" radius="full" variant="light">
        Preview
      </Button>
    </section>
  );
}

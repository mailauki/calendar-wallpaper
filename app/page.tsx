import Months from "@/components/months";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="mx-auto max-w-md flex flex-col items-center justify-center gap-4 h-full">
			<Months />
      <Button as="a" href="/preview" radius="full" variant="light">
        Preview
      </Button>
    </section>
  );
}

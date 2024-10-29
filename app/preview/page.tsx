import { Button } from "@nextui-org/button";

export default function Preview() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Button as="a" href="/" radius="full" variant="light">
        Back
      </Button>
    </section>
  );
}

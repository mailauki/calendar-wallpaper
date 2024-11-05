import SelectOptions from "@/components/select-options";

export default function Home() {
  return (
    // <section className="mx-auto max-w-6xl flex flex-col items-center justify-start h-full">
    //   <SelectOptions />
    // </section>
    <div className="flex flex-col md:flex-row gap-4">
      <SelectOptions />
    </div>
  );
}

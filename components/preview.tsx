import { CalendarDate, Card, Link } from "@nextui-org/react";

export default function Preview({
  date,
  bgColor,
  textColor,
}: {
  date: CalendarDate;
  bgColor: string;
  textColor: string;
}) {
  return (
    <>
      {/* <Card
        isFooterBlurred
        isHoverable
        isPressable
        radius="sm"
        shadow="none"
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            alt={date.toString()}
            className="w-full object-cover h-[140px]"
            radius="sm"
            shadow="none"
            src={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}`}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <p className="text-black text-tiny">Peview</p>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Download
          </Button>
        </CardFooter>
      </Card> */}
      {/* <img
        alt={date.toString()}
        src={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}`}
      /> */}
      <Card
        isPressable
        as={Link}
        href={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}`}
        radius="sm"
        shadow="none"
      >
        <img
          alt={date.toString()}
          src={`/api/og?date=${date.toString()}&bg=${bgColor}&text=${textColor}`}
        />
      </Card>
    </>
  );
}

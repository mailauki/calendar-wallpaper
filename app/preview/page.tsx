import { Button } from "@nextui-org/button";

{
  /* <meta content="Twitter link preview image URL" property="twitter:image" />;
<meta content="summary_large_image" property="twitter:card" />;
<meta content="Twitter link preview title" property="twitter:title" />;
<meta
  content="Twitter link preview description"
  property="twitter:description"
/>; */
}

{
  /* <meta content="Link preview image URL" property="og:image" />;
<meta content="Link preview site name" property="og:site_name" />;
<meta content="Link preview title" property="og:title" />;
<meta content="Link preview description" property="og:description" />;
<meta content="Canonical link preview URL" property="og:url" />; */
}

{
  /* <head>
  <title>Hello world</title>
  <meta
    property="og:image"
    content="https://og-examples.vercel.sh/api/static"
  />
</head> */
}

export default function Preview() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Button as="a" href="/" radius="full" variant="light">
        Back
      </Button>
    </section>
  );
}

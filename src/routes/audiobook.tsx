import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { serviceByPath } from "@/content/services";

const service = serviceByPath("/audiobook")!;

export const Route = createFileRoute("/audiobook")({
  head: () => ({
    meta: [
      { title: `${service.title} Australia | Australian eBook Publishers` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} | Australian eBook Publishers` },
      { property: "og:description", content: service.blurb },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AudiobookRoute,
});

function AudiobookRoute() {
  return <ServicePage service={service} />;
}

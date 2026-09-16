import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { serviceByPath } from "@/content/services";

const service = serviceByPath("/childrens-book-publishers")!;

export const Route = createFileRoute("/childrens-book-publishers")({
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
  component: ChildrensBookPublishersRoute,
});

function ChildrensBookPublishersRoute() {
  return <ServicePage service={service} />;
}

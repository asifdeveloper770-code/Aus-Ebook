import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { serviceByPath } from "@/content/services";

const service = serviceByPath("/book-video-trailer")!;

export const Route = createFileRoute("/book-video-trailer")({
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
  component: BookVideoTrailerRoute,
});

function BookVideoTrailerRoute() {
  return <ServicePage service={service} />;
}

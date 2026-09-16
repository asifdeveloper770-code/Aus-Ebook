import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { serviceByPath } from "@/content/services";
import bookCover1 from "@/assets/cover1.jpg"
import bookCover2 from "@/assets/cover2.jpg"
import bookCover3 from "@/assets/cover3.jpg"
import bookCover4 from "@/assets/cover4.jpg"
// import bookCover5 from "@/assets/cover5.jpg"

const service = serviceByPath("/book-cover-design")!;

const bookCovers = [
  bookCover1,
  bookCover2,
  bookCover3,
  bookCover4,
  // bookCover5,
];

export const Route = createFileRoute("/book-cover-design")({
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
  component: BookCoverDesignRoute,
});

function BookCoverDesignRoute() {
  return <ServicePage service={service} bookCovers={bookCovers} />;
}

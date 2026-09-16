import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Tilt } from "@/components/site/Tilt";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";

const DESC =
  "Australian authors on what it was like to publish with us — editing, design, printing, audio and launch.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Author Testimonials | Australian eBook Publishers" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Author Testimonials | Australian eBook Publishers" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Testimonials,
});

const quotes = [
  {
    name: "Marguerite H.",
    role: "Memoir author, Brisbane",
    text: "I had been carrying this story for eleven years. They read it properly, told me the truth about the middle third, and then helped me fix it. Holding the hardcover was the best day of my year.",
  },
  {
    name: "Daniel O.",
    role: "Crime novelist, Perth",
    text: "The cover alone changed everything. My previous edition sat at nothing for two years. Same book, new cover and metadata, and it finally started finding readers.",
  },
  {
    name: "Priya S.",
    role: "Children's author, Melbourne",
    text: "They matched me with an illustrator whose work made me cry the first time I saw the roughs. The board edition has survived my own toddler, which is the real test.",
  },
  {
    name: "Ken W.",
    role: "Business author, Sydney",
    text: "No upsells, no vague packages. I got a quote, a schedule, and a person who answered the phone. That is genuinely rare in this industry.",
  },
  {
    name: "Alison T.",
    role: "Historical fiction, Adelaide",
    text: "The editorial assessment was worth the whole fee on its own. It was blunt, generous and completely right about what the book needed.",
  },
  {
    name: "Rob and Jenny M.",
    role: "Family history, Hobart",
    text: "Two hundred photographs, four generations and a mess of notes. They turned it into a book our whole family now owns a copy of.",
  },
];

const stats = [
  { value: "500+", label: "Titles produced" },
  { value: "4.9", label: "Average author rating" },
  { value: "100%", label: "Rights retained by authors" },
  { value: "12 wks", label: "Typical time to release" },
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What authors say once the box of books arrives"
        lead="The reviews below reflect the kind of feedback we hear most often. Names are shortened at our authors' request."
      />

      <section className="border-b border-border bg-sand px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="font-display text-4xl text-primary sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="In their words" title="Six authors, six very different books" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q, i) => (
              <Reveal key={q.name} delay={i * 80}>
                <Tilt strength={8}>
                  <figure className="surface-card flex h-full flex-col p-8">
                    <Quote className="h-7 w-7 text-accent" />
                    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {q.text}
                    </blockquote>
                    <div className="mt-6 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, n) => (
                        <Star key={n} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                    <figcaption className="mt-4 border-t border-border pt-4">
                      <p className="text-sm font-semibold text-foreground">{q.name}</p>
                      <p className="text-xs text-muted-foreground">{q.role}</p>
                    </figcaption>
                  </figure>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="We would love to add your story here"
        text="Start with a conversation. There is no cost and no obligation to go ahead."
      />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import aboutCraft from "@/assets/about-craft.jpg";
import printing from "@/assets/printing.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Tilt } from "@/components/site/Tilt";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";

const DESC =
  "Meet Australian eBook Publishers — an independent publishing house helping Australian authors produce books that stand beside anything on the shelf.";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Australian eBook Publishers" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Our Story | Australian eBook Publishers" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurStory,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Straight answers",
    text: "If a manuscript is not ready, we say so. If a service will not move the needle for your book, we talk you out of it.",
  },
  {
    icon: HeartHandshake,
    title: "You own everything",
    text: "Copyright, files, royalties, mailing list, domain. We are a partner for the project, not a claim on your work.",
  },
  {
    icon: Compass,
    title: "Craft before volume",
    text: "We take on a limited number of titles each quarter so every one gets a real editor and a real designer.",
  },
  {
    icon: BookOpen,
    title: "Australian at heart",
    text: "Local voices, local spelling, local booksellers — with distribution that reaches readers well beyond the coast.",
  },
];

const timeline = [
  {
    year: "The beginning",
    title: "Two editors and a kitchen table",
    text: "We started because talented Australian writers kept being handed contracts they could not read and invoices they could not question.",
  },
  {
    year: "Growing up",
    title: "A full production studio",
    text: "Designers, typesetters, illustrators and narrators joined, so a book could be made properly end to end without being handed around.",
  },
  {
    year: "Going wide",
    title: "Shelves and screens worldwide",
    text: "Distribution partnerships opened print and digital retail across Australia, the UK, North America and the library market.",
  },
  {
    year: "Today",
    title: "Still author-first",
    text: "Hundreds of titles later the promise has not moved: you keep your rights, you see every cost, and the book gets made well.",
  },
];

function OurStory() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A publishing house built by editors, not salespeople"
        lead="We exist because too many good Australian books were being let down by rushed production and vague promises. So we built the alternative."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal delay={80}>
            <Tilt strength={7}>
              <img
                src={aboutCraft}
                alt="An open hardcover book beside manuscript pages"
                width={1200}
                height={900}
                loading="lazy"
                className="rounded-[1.75rem] border border-border shadow-[var(--shadow-deep)]"
              />
            </Tilt>
          </Reveal>
          <Reveal>
            <div className="rule-gold">
              <h2 className="text-3xl leading-tight text-foreground sm:text-[2.5rem]">
                We treat every manuscript like it might be the one someone keeps for thirty years
              </h2>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Publishing is a craft trade dressed up as an industry. The difference between a book
              that gets read and one that gets returned usually comes down to a handful of unglamorous
              decisions — the right editor, the right trim size, a cover that respects its genre,
              metadata that a search engine can actually understand.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our team has spent careers making those decisions. We bring that judgement to
              first-time authors who have never seen a print spec, and to experienced writers who
              simply want a partner who will not waste their time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four things we will not compromise on"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <Tilt strength={6}>
                  <div className="surface-card flex h-full gap-5 p-8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/20">
                      <v.icon className="h-5 w-5 text-accent-foreground" />
                    </span>
                    <div>
                      <h3 className="text-lg text-foreground">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="How we got here" title="The short version" />
          <div className="relative mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.title} delay={i * 90}>
                  <div className="relative border-l-2 border-border pl-8">
                    <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                    <p className="eyebrow">{t.year}</p>
                    <h3 className="mt-2 text-xl text-foreground">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={140} className="lg:sticky lg:top-32 lg:h-fit">
              <Tilt strength={6}>
                <img
                  src={printing}
                  alt="Freshly printed hardcover books"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="rounded-[1.75rem] border border-border shadow-[var(--shadow-deep)]"
                />
              </Tilt>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Bring us your manuscript"
        text="Whether it is finished, half-finished or still a stack of notes, we will tell you honestly what it needs next."
      />
    </>
  );
}

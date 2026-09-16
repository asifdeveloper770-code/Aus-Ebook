import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-journey.mp4";
import aboutCraft from "@/assets/about-craft.jpg";
import portfolioCovers from "@/assets/portfolio-covers.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Tilt } from "@/components/site/Tilt";
import { CtaBand, GhostButton, PrimaryButton, SectionHeading } from "@/components/site/Sections";
import { services } from "@/content/services";

const DESC =
  "Australian eBook Publishers helps authors edit, design, print, narrate and launch books they own outright. Free quote, honest advice, rights stay with you.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Australian eBook Publishers | Publish Your Book, Keep Your Rights" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Australian eBook Publishers" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const steps = [
  {
    n: "01",
    title: "Read and assess",
    text: "A senior editor reads your manuscript and writes you a plain-English report on what it needs.",
  },
  {
    n: "02",
    title: "Shape the book",
    text: "Editing, ghostwriting or restructuring — whatever the story actually calls for, nothing it does not.",
  },
  {
    n: "03",
    title: "Make it beautiful",
    text: "Cover design, interior typesetting, illustration and audio, produced to retail specification.",
  },
  {
    n: "04",
    title: "Put it in front of readers",
    text: "Print, ebook and audio distribution, metadata that ranks, and a launch plan you can actually run.",
  },
];

const stats = [
  { value: "500+", label: "Books produced" },
  { value: "100%", label: "Rights kept by authors" },
  { value: "12 wks", label: "Typical manuscript to launch" },
  { value: "4.9/5", label: "Author satisfaction" },
];

function Home() {
  return (
    <>
      {/* Full-bleed video hero */}
      <section className="relative flex min-h-[36rem] items-end overflow-hidden sm:min-h-[42rem] lg:min-h-[calc(100vh-5rem)] lg:max-h-[52rem]">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="An author's journey from manuscript to printed book"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-video-overlay absolute inset-0" aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 lg:px-8 lg:pb-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Independent Australian publishing
            </p>
            <h1 className="mt-4 text-4xl leading-[1.02] text-primary-foreground sm:text-6xl lg:text-7xl">
              Your story. Beautifully published.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              From manuscript to bookshelf — with your rights always yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/get-a-quote" className="bg-accent text-accent-foreground">
                Get a Free Quote
              </PrimaryButton>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 bg-ink/35 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-md transition-colors hover:bg-ink/60"
              >
                See our books <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-5 py-8 lg:px-8">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-primary-foreground/20 pl-5">
              <dt className="font-display text-2xl text-accent sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-primary-foreground/65">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border bg-sand py-5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-10">
              {services.map((s) => (
                <span
                  key={s.path + r}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {s.navLabel} <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-background px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we do"
            title="Twelve services, one production team"
            lead="Take the full publishing package, or just the piece your book is missing. Nothing is bundled to pad an invoice."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.path} delay={(i % 3) * 90}>
                <Tilt strength={9}>
                  <Link
                    to={s.path}
                    className="surface-card group flex h-full flex-col overflow-hidden"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg text-foreground">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {s.blurb}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps, no mystery"
            lead="You will always know what stage your book is at, who is working on it and what happens next."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <Tilt strength={7}>
                  <div className="surface-card h-full p-7">
                    <span className="font-display text-4xl text-accent">{s.n}</span>
                    <h3 className="mt-4 text-lg text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ink px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Tilt strength={8}>
              <img
                src={aboutCraft}
                alt="An editor working through a printed manuscript"
                width={1200}
                height={900}
                loading="lazy"
                className="rounded-[1.75rem] border border-border shadow-[var(--shadow-deep)]"
              />
            </Tilt>
          </Reveal>
          <Reveal delay={120}>
            <div className="rule-gold">
              <h2 className="text-3xl leading-tight text-primary-foreground sm:text-[2.6rem]">
                A publisher that works for the author, not around them
              </h2>
            </div>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
              We are a small studio of editors, designers, illustrators and narrators who took the
              parts of traditional publishing that actually help a book and threw out the parts that
              only help the publisher.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "You keep copyright, files and 100% of your royalties.",
                "Fixed, itemised pricing agreed before anything starts.",
                "One point of contact from first read to launch day.",
                "Distribution into Australian and international retail and libraries.",
              ].map((t, i) => (
                <Reveal as="li" key={t} delay={i * 80} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-primary-foreground/70">{t}</span>
                </Reveal>
              ))}
            </ul>
            <div className="mt-9">
              <PrimaryButton to="/our-story">Read our story</PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="bg-sand px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <Reveal className="p-10 sm:p-14">
              <p className="eyebrow">Recent work</p>
              <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
                Covers that earn a second look on a crowded table
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Literary fiction, memoir, crime, business and picture books — each designed for the
                shelf it will sit on, then tested at thumbnail size where most readers meet it first.
              </p>
              <div className="mt-8">
                <GhostButton to="/portfolio">View the portfolio</GhostButton>
              </div>
            </Reveal>
            <Reveal delay={130} className="h-full">
              <img
                src={portfolioCovers}
                alt="A spread of published book covers"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full min-h-[22rem] w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

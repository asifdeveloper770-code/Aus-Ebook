import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services, type Service } from "@/content/services";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";
import {
  CtaBand,
  FaqList,
  GhostButton,
  PageHero,
  PrimaryButton,
  SectionHeading,
  TickList,
} from "./Sections";

export function ServicePage({
  service,
  bookCovers = [],
}: {
  service: Service;
  bookCovers?: string[];
}) {
  const others = services.filter((s) => s.path !== service.path).slice(0, 4);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} lead={service.tagline}>
        <PrimaryButton to="/get-a-quote">Get a Free Quote</PrimaryButton>
        <GhostButton to="/contact">Ask a question</GhostButton>
      </PageHero>

      {/* Intro + image */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="rule-gold">
              <h2 className="text-3xl leading-tight text-foreground sm:text-[2.5rem]">
                {service.blurb}
              </h2>
            </div>
            <div className="mt-6 space-y-5">
              {service.intro.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Tilt strength={7}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-deep)]">
                <img
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-sand px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why it works" title="What you get from us" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 110}>
                <Tilt strength={8}>
                  <div className="surface-card h-full p-8">
                    <span className="font-display text-4xl text-accent">0{i + 1}</span>
                    <h3 className="mt-4 text-lg text-foreground">{h.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Book Cover Gallery */}
      {bookCovers.length > 0 && (
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Our work"
                title="Book covers that make an impression"
                lead="Explore a selection of professionally designed book covers created to capture attention and bring every story to life."
              />
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {bookCovers.map((cover, index) => (
                <Reveal key={`${cover}-${index}`} delay={index * 90}>
                  <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-deep)] transition-transform duration-300 hover:-translate-y-2">
                    <div className="aspect-[2/3] overflow-hidden">
                      <img
                        src={cover}
                        alt={`Book cover design ${index + 1}`}
                        width={600}
                        height={900}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="Included"
            title="Everything in the package"
            lead="No hidden line items. This is what lands in your inbox when the project is done."
          />
          <Reveal delay={100}>
            <TickList items={service.deliverables} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Questions" title="Good to know" />
          <div className="mt-12">
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Keep going" title="Pairs well with" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s, i) => (
              <Reveal key={s.path} delay={i * 90}>
                <Link
                  to={s.path}
                  className="surface-card group flex h-full flex-col justify-between p-6 hover:-translate-y-1.5"
                >
                  <div>
                    <h3 className="text-base text-foreground">{s.navLabel}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.tagline}</p>
                  </div>
                  <ArrowUpRight className="mt-6 h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

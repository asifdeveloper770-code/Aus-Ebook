import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-primary-foreground/10 bg-ink">
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-accent/60" />
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
           <h1 className="mt-4 text-4xl leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
           <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            {lead}
          </p>
          {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function PrimaryButton({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-0.5",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1/3 bg-primary-foreground/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ animation: "sheen 1.1s var(--ease-out-soft)" }}
      />
    </Link>
  );
}

export function GhostButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </Reveal>
  );
}

export function CtaBand({
  title = "Ready to see your name on a spine?",
  text = "Tell us about the book. We will come back with an honest read on what it needs, what it costs and how long it takes.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16"
          style={{ backgroundImage: "var(--gradient-ink)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          />
          <div
            aria-hidden
            className="float-slow pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full border border-primary-foreground/15"
          />
          <h2 className="relative mx-auto max-w-3xl text-3xl leading-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            {text}
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground/10"
            >
              Talk to a publisher
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function TickList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={i * 60} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/25">
            <Check className="h-3 w-3 text-accent-foreground" />
          </span>
          <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
        </Reveal>
      ))}
    </ul>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={open}
            >
              <span className="text-sm font-semibold text-foreground sm:text-base">{item.q}</span>
              <Plus
                className={cn(
                  "h-4 w-4 shrink-0 text-accent transition-transform duration-400",
                  open && "rotate-45",
                )}
              />
            </button>
            <div
              className="grid transition-all duration-500"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

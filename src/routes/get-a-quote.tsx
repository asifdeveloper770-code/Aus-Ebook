import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Clock, Lock, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { Tilt } from "@/components/site/Tilt";
import { PageHero } from "@/components/site/Sections";
import { services } from "@/content/services";

const DESC =
  "Tell us about your book and receive a clear, itemised publishing quote with no obligation.";

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Publishing Quote | Australian eBook Publishers" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Get a Free Publishing Quote" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GetAQuote,
});

const promises = [
  { icon: Clock, title: "Reply within one business day", text: "A real publisher reads your note, not an autoresponder." },
  { icon: MessageSquare, title: "Itemised, not a package price", text: "You see every line so you can keep or cut what you like." },
  { icon: Lock, title: "Your manuscript stays private", text: "We never share, publish or train on anything you send us." },
];

function GetAQuote() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks — your request has been noted.");
  }

  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title="Tell us about your book"
        lead="A few details are enough for us to come back with a realistic scope, timeline and price."
      />

      <section className="bg-sand px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Tilt strength={5}>
                  <div className="surface-card flex gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/20">
                      <p.icon className="h-5 w-5 text-accent-foreground" />
                    </span>
                    <div>
                      <h3 className="text-base text-foreground">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
            <Reveal delay={340}>
              <div
                className="rounded-2xl p-7 text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-ink)" }}
              >
                <p className="eyebrow text-primary-foreground/60">Prefer to talk?</p>
                <p className="mt-3 text-lg">Call +61 (0)0 0000 0000</p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  Phone number is a placeholder until you send us the real one.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="surface-card p-8 sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                  <h2 className="mt-5 text-2xl text-foreground">Request received</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thank you. A publisher will read your notes and reply with an itemised quote.
                    This demo form does not send email yet — connect it whenever you are ready.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" name="name" placeholder="Jane Author" required />
                    <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone" name="phone" placeholder="Optional" />
                    <Field label="Book title" name="title" placeholder="Working title is fine" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-semibold text-foreground">
                        What do you need?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      >
                        <option>Not sure yet</option>
                        {services.map((s) => (
                          <option key={s.path}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <Field label="Approximate word count" name="words" placeholder="e.g. 65,000" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                      Tell us about the book
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Genre, stage of the manuscript, what you want the finished book to be…"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Send my request
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No obligation. Your details are never shared.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  );
}

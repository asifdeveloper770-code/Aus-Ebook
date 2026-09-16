import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { Tilt } from "@/components/site/Tilt";
import { FaqList, PageHero, SectionHeading } from "@/components/site/Sections";

const DESC =
  "Get in touch with Australian eBook Publishers — phone, email or send us a note about your manuscript.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Australian eBook Publishers" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Contact Us | Australian eBook Publishers" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: Phone, label: "Phone", value: "+61 (0)0 0000 0000", href: "tel:+61000000000" },
  { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { icon: MapPin, label: "Studio", value: "Street address placeholder, City, Australia" },
  { icon: Clock3, label: "Hours", value: "Monday to Friday, 9am – 5pm AEST" },
];

const faqs = [
  {
    q: "Do you charge for the first conversation?",
    a: "No. The first call and the written quote that follows are free, and there is no obligation to proceed.",
  },
  {
    q: "Can I send my manuscript before we speak?",
    a: "Yes. Attach it to your email and we will read a sample before the call so the conversation is useful.",
  },
  {
    q: "Do you work with authors outside Australia?",
    a: "We do. Most of our work is with Australian authors, but we publish and distribute internationally.",
  },
  {
    q: "How quickly can you start?",
    a: "We take on a limited number of new titles each month. Most projects can begin within two to three weeks.",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your book"
        lead="Call, email, or leave a note below. A publisher — not a call centre — will get back to you."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 90}>
                  <Tilt strength={6}>
                    <div className="surface-card h-full p-6">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/20">
                        <d.icon className="h-5 w-5 text-accent-foreground" />
                      </span>
                      <p className="eyebrow mt-4">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="mt-1.5 block text-sm font-semibold text-foreground transition-colors hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-sm font-semibold text-foreground">{d.value}</p>
                      )}
                    </div>
                  </Tilt>
                </Reveal>
              ))}
            </div>
            <Reveal delay={380}>
              <p className="mt-6 rounded-2xl border border-dashed border-border p-5 text-xs leading-relaxed text-muted-foreground">
                These contact details are placeholders. Send us your real phone number, email and
                address and we will put them in place across every page.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="surface-card p-8 sm:p-10">
              {sent ? (
                <div className="py-16 text-center">
                  <Send className="mx-auto h-10 w-10 text-accent" />
                  <h2 className="mt-5 text-2xl text-foreground">Message noted</h2>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thanks for reaching out. This form is not connected to email yet — say the word
                    and we will hook it up so enquiries land in your inbox.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    toast.success("Thanks — your message has been noted.");
                  }}
                  className="space-y-5"
                >
                  <h2 className="text-2xl text-foreground">Send a message</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input label="Name" name="name" required />
                    <Input label="Email" name="email" type="email" required />
                  </div>
                  <Input label="Subject" name="subject" placeholder="What is this about?" />
                  <div>
                    <label htmlFor="msg" className="mb-2 block text-sm font-semibold text-foreground">
                      Message
                    </label>
                    <textarea
                      id="msg"
                      name="msg"
                      rows={6}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Before you write" title="Quick answers" />
          <div className="mt-12">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}

function Input({
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
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  );
}

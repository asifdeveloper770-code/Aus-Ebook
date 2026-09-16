import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portfolioCovers from "@/assets/Fifty-Two Snapshots.jpg";
import illustration from "@/assets/britany.webp";
import printing from "@/assets/Peacock Alley.jpg";
import aboutCraft from "@/assets/tom ringer.jpg";
import audiobook from "@/assets/Wings of the Heart.jpg";
import coverDesign from "@/assets/testimony.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Tilt } from "@/components/site/Tilt";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";
import { cn } from "@/lib/utils";

const DESC =
  "A selection of books we have edited, designed, illustrated, printed and released for Australian authors.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Australian eBook Publishers" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Portfolio | Australian eBook Publishers" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

type Work = {
  title: string;
  genre: string;
  category: "Spies & Politics" | "Historical" | "Love" ;
  note: string;
  image: string;
};

const works: Work[] = [
  {
    title: "Fifty-Two Snapshots: A Memoir Starter Kit",
    genre: "Sonja Livingston (Author)",
    category: "Spies & Politics",
    note: "Many people want to write their memoirs or family stories but have no idea how to begin.Sonja Livingston, uses her years of experience as a writer and teacher to help you jumpstart your writing project.",
    image: portfolioCovers,
  },
  {
    title: "Being Tom Ringer",
    genre: "Tali Isseroff (Author)",
    category: "Spies & Politics",
    note: "For fans of spy thrillers and readers fascinated by espionage, this gripping thriller draws readers into the world of Israeli intelligence and the Mossad, exploring deep-cover operations, divided loyalties, and the psychological cost of becoming someone else.",
    image: aboutCraft,
  },
  {
    title: "The Death of Brittany Black",
    genre: " Creighton Lange (Author)",
    category: "Spies & Politics",
    note: "A conspiracy thriller in the vein of The Parallax View, The Firm and Klute. A down-on-her-luck LAPD Detective gets in over her head when investigating the death of an anonymous young woman.Why was the body of this woman left in a Hollywood shooting gallery",
    image: illustration,
  },
  {
    title: "The Testimony of Cain: As recorded by Dr. Thomas Ashworth",
    genre: " W. K. Carter (Author) ",
    category: "Historical",
    note: "A man is recovered from the Arctic. He should not be alive.When psychologist Dr. Thomas Ashworth is summoned to a secure research facility in the Netherlands, he expects a difficult patient. What he finds instead is a silent, watchful man with impossible strength, an unnatural capacity to heal, and a mind that seems older than the modern world itself.",
    image: coverDesign,
  },
  {
    title: "Peacock Alley: Tales from the Waldorf & the Astoria",
    genre: "W. K. Carter (Author)",
    category: "Historical",
    note: "In Peacock Alley—the celebrated corridor where society’s elite parade in silk and scandal—bankers, heiresses, bellmen, chambermaids, and schemers pass one another daily, each carrying secrets of their own. Some arrive in search of power. Others in search of survival. All are drawn into the orbit of the Astor dynasty and the hotels that would redefine luxury in America.",
    image: printing,
  },
  {
    title: "Wings of the Heart: A Wanderheart Sweet Romance Series",
    genre: " Sherry Aab (Author) ",
    category: "Love",
    note: "Sometimes love isn’t about where you land…but who catches you on the way down.One clumsy fall in LAX and my life shifts midair.He catches me—this gorgeous, maddeningly calm Australian with an accent that short- circuits my brain: Whoa, we want you on the plane, not under it.He says with a smile that should be illegal.",
image: audiobook,
  },
];

const filters = ["All", "Spies & Politics" , "Historical" , "Love" ] as const;

function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Books we are proud to have made"
        lead="Titles shown here are representative examples of our production work across fiction, memoir, children's books and audio."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Selected work" title="Browse by category" />

          <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300",
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <Tilt strength={10}>
                  <article className="surface-card h-full overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={w.image}
                        alt={w.title}
                        width={1200}
                        height={900}
                        loading="lazy"
                        className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-primary">
                        {w.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="eyebrow">{w.genre}</p>
                      <h3 className="mt-2 text-lg text-foreground">{w.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.note}</p>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Your book could be next"
        text="Send us the manuscript and we will show you exactly how we would produce it."
      />
    </>
  );
}

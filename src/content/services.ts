import coverDesign from "@/assets/cover-design.jpg";
import editing from "@/assets/editing.jpg";
import ghostwriting from "@/assets/ghostwriting.jpg";
import formatting from "@/assets/formatting.jpg";
import trailer from "@/assets/trailer.jpg";
import marketing from "@/assets/marketing.jpg";
import printing from "@/assets/printing.jpg";
import authorWebsite from "@/assets/author-website.jpg";
import illustration from "@/assets/illustration.jpg";
import audiobook from "@/assets/audiobook.jpg";
import portfolioCovers from "@/assets/portfolio-covers.jpg";
import aboutCraft from "@/assets/about-craft.jpg";

export type ServicePath =
  | "/publish-book"
  | "/book-cover-design"
  | "/ghost-writing"
  | "/book-editing"
  | "/book-formatting"
  | "/book-video-trailer"
  | "/book-marketing"
  | "/book-printing"
  | "/author-website"
  | "/book-illustration"
  | "/audiobook"
  | "/childrens-book-publishers";

export type Service = {
  path: ServicePath;
  title: string;
  navLabel: string;
  tagline: string;
  blurb: string;
  image: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    path: "/publish-book",
    title: "Book Publishing",
    navLabel: "Book Publishing",
    tagline: "From finished manuscript to shelves and screens worldwide.",
    blurb:
      "End-to-end publishing, managed by one team — editorial, design, production, distribution and release.",
    image: aboutCraft,
    intro: [
      "Publishing a book should feel like being looked after, not like chasing five freelancers across three time zones. We run the entire release under one roof: your editor, designer, typesetter and distribution manager all sit around the same table.",
      "You keep your rights and your royalties. We bring the process, the standards and the retail relationships that turn a finished manuscript into a book readers can actually find and buy.",
    ],
    highlights: [
      {
        title: "One accountable team",
        text: "A single publishing manager owns your release from first call to launch week, so nothing falls between the cracks.",
      },
      {
        title: "Retail-ready from day one",
        text: "Metadata, categories, ISBNs and pricing are set up the way the major stores expect, not guessed at.",
      },
      {
        title: "Print and digital together",
        text: "Paperback, hardcover and ebook editions are produced in parallel so every format lands on the same launch date.",
      },
    ],
    deliverables: [
      "Publishing strategy and release calendar",
      "ISBN registration and copyright guidance",
      "Interior typesetting for print and reflowable ebook",
      "Cover design and print-ready files",
      "Global distribution setup and listing management",
      "Launch-week checklist and reporting",
    ],
    faqs: [
      {
        q: "Do I keep the rights to my book?",
        a: "Always. You retain full copyright and ownership of your work. We act as your production and distribution partner, never as the owner of your story.",
      },
      {
        q: "How long does a full publishing project take?",
        a: "Most titles move from signed manuscript to release in twelve to twenty weeks, depending on the depth of editing and the formats you choose.",
      },
      {
        q: "Can you publish a book I have already self-published?",
        a: "Yes. We regularly relaunch existing titles with fresh editing, a new cover and corrected metadata, which often makes a dramatic difference to sales.",
      },
    ],
  },
  {
    path: "/book-cover-design",
    title: "Book Cover Design",
    navLabel: "Cover Design",
    tagline: "A cover that earns the second glance — and the sale.",
    blurb:
      "Original, genre-literate cover art designed to work at thumbnail size and on a bookshelf.",
    image: coverDesign,
    intro: [
      "A reader decides in roughly two seconds. Your cover has to say the genre, the tone and the promise of the book before a single word is read — and it has to do it at the size of a postage stamp on a phone screen.",
      "We design from the inside out. Our designers read your manuscript summary, study the shelf your book will sit on, and then build something that belongs there while still standing apart.",
    ],
    highlights: [
      {
        title: "Genre research first",
        text: "We map the covers already winning in your category so yours signals the right promise instantly.",
      },
      {
        title: "Three original routes",
        text: "You receive three distinct concepts, not three colourways of the same idea.",
      },
      {
        title: "Every format covered",
        text: "Front cover, full wrap with spine and back, plus social and retail crops.",
      },
    ],
    deliverables: [
      "Three original cover concepts",
      "Two full refinement rounds",
      "Print-ready wrap with spine calculated to your page count",
      "Ebook cover at store specifications",
      "3D mockups for marketing use",
      "Layered source files on request",
    ],
    faqs: [
      {
        q: "Can I use my own artwork or photograph?",
        a: "Absolutely. We regularly build covers around an author's own image, illustration or family archive material.",
      },
      {
        q: "What if none of the concepts feel right?",
        a: "We go back to the brief and design a fresh route. The project is not finished until you are happy to put your name on the cover.",
      },
      {
        q: "Do you provide the spine and back cover?",
        a: "Yes, the full print wrap is included once your final page count is confirmed.",
      },
    ],
  },
  {
    path: "/ghost-writing",
    title: "Ghost Writing",
    navLabel: "Ghost Writing",
    tagline: "Your story, your voice, written with you.",
    blurb:
      "Experienced ghostwriters who capture how you actually speak and shape it into a book worth reading.",
    image: ghostwriting,
    intro: [
      "Plenty of people have a book in them and no realistic way to sit down and write it. Ghostwriting solves the time problem without costing you the voice — the finished manuscript should read like you on your best day.",
      "We start with structured interviews, build a chapter architecture you approve, then draft in stages so you can steer as the book takes shape rather than reacting to a finished block of text.",
    ],
    highlights: [
      {
        title: "Voice capture sessions",
        text: "Recorded conversations become the raw material, so the rhythm of your speech survives into the prose.",
      },
      {
        title: "Chapter-by-chapter approval",
        text: "You read and sign off as we go — no waiting six months to find out it missed.",
      },
      {
        title: "Complete confidentiality",
        text: "Every project is covered by a written confidentiality agreement. Your name is the only one on the book.",
      },
    ],
    deliverables: [
      "Discovery and voice-mapping interviews",
      "Approved chapter outline and synopsis",
      "Full manuscript drafted in staged deliveries",
      "Two revision passes per chapter",
      "Structural edit before handover",
      "Written confidentiality agreement",
    ],
    faqs: [
      {
        q: "Will anyone know I used a ghostwriter?",
        a: "No. The work is confidential and the copyright is assigned entirely to you on completion.",
      },
      {
        q: "How much of my time does it take?",
        a: "Usually one to two hours of interview a week during the drafting phase, plus reading time for each chapter.",
      },
      {
        q: "Can you work from notes I have already written?",
        a: "Yes, and it helps. Drafts, journals, transcripts and even voice memos all feed the manuscript.",
      },
    ],
  },
  {
    path: "/book-editing",
    title: "Book Editing",
    navLabel: "Editing",
    tagline: "The invisible work that makes a book feel professional.",
    blurb:
      "Developmental, line, copy and proof editing — matched to what your manuscript actually needs.",
    image: editing,
    intro: [
      "Editing is not proofreading with a bigger budget. A structural problem in chapter four cannot be fixed by tidying commas, and a beautifully structured book still loses readers if the sentences trip.",
      "We assess the manuscript first and tell you honestly which level of editing it needs. You never pay for a service the book does not require.",
    ],
    highlights: [
      {
        title: "Honest assessment first",
        text: "A written report on structure, pacing, voice and market readiness before any editing begins.",
      },
      {
        title: "Tracked and explained",
        text: "Every change is tracked and the significant ones are explained, so the final call stays yours.",
      },
      {
        title: "Australian or international style",
        text: "We edit to Australian, UK or US conventions and hold a style sheet for consistency.",
      },
    ],
    deliverables: [
      "Editorial assessment report",
      "Developmental edit with structural notes",
      "Line edit for rhythm, clarity and voice",
      "Copy edit for grammar, consistency and fact checks",
      "Custom style sheet",
      "Final proofread on typeset pages",
    ],
    faqs: [
      {
        q: "Which level of editing do I need?",
        a: "Send us the manuscript and we will tell you. Most first-time authors benefit from a developmental pass before anything else.",
      },
      {
        q: "Will editing change my voice?",
        a: "No. A good editor sharpens your voice rather than replacing it, and every substantive change is visible for you to accept or reject.",
      },
      {
        q: "Do you edit non-fiction and memoir?",
        a: "Yes, alongside fiction, children's books, academic work and business titles.",
      },
    ],
  },
  {
    path: "/book-formatting",
    title: "Book Formatting",
    navLabel: "Formatting",
    tagline: "Interiors that read beautifully in print and on screen.",
    blurb:
      "Professional typesetting for paperback, hardcover and reflowable ebook editions.",
    image: formatting,
    intro: [
      "Readers rarely notice good typesetting, which is exactly the point. Bad typesetting, on the other hand, is the fastest way to make a serious book look amateur.",
      "We set your interior to real typographic standards — measured line length, considered leading, proper running heads, clean chapter openers — then export files that behave correctly on every device and press.",
    ],
    highlights: [
      {
        title: "Typography with intent",
        text: "Typeface, measure and spacing chosen for your genre and trim size, not left on defaults.",
      },
      {
        title: "Device-tested ebooks",
        text: "EPUB files checked on e-ink readers, phones and tablets before delivery.",
      },
      {
        title: "Complex layouts welcome",
        text: "Images, tables, footnotes, recipes, poetry and bilingual text are all handled.",
      },
    ],
    deliverables: [
      "Print interior PDF at your chosen trim size",
      "Reflowable EPUB for digital stores",
      "Front and back matter setup",
      "Table of contents and navigation",
      "Image placement and resolution checks",
      "One revision round after your review",
    ],
    faqs: [
      {
        q: "What trim size should I choose?",
        a: "We recommend one based on your genre and page count — an oversized trim on a short book looks thin, and the wrong choice raises print costs.",
      },
      {
        q: "Can you format a book with lots of images?",
        a: "Yes. Illustrated non-fiction, cookbooks and photo-led memoirs are a regular part of our work.",
      },
      {
        q: "Do I get the source files?",
        a: "Print-ready and store-ready files are always yours. Editable source files are available on request.",
      },
    ],
  },
  {
    path: "/book-video-trailer",
    title: "Book Video Trailer",
    navLabel: "Video Trailer",
    tagline: "Thirty seconds that make people want the book.",
    blurb:
      "Cinematic trailers built for social feeds, retail pages and launch campaigns.",
    image: trailer,
    intro: [
      "A trailer is the fastest way to give a book momentum online. It travels further than a cover image, holds attention longer than a blurb, and gives you something to hand to bookshops, bloggers and event organisers.",
      "We write, storyboard, score and edit each trailer around the emotional core of your story — not a slideshow of stock footage with the title pasted on the end.",
    ],
    highlights: [
      {
        title: "Story-first scripting",
        text: "We find the single hook that makes a stranger care, then build the whole cut around it.",
      },
      {
        title: "Made for the feed",
        text: "Delivered in wide, square and vertical cuts with burned-in captions for silent playback.",
      },
      {
        title: "Licensed sound",
        text: "Cleared music and professional voiceover, so nothing gets muted or taken down.",
      },
    ],
    deliverables: [
      "Concept and script",
      "Storyboard for approval",
      "Thirty to sixty second edited trailer",
      "Wide, square and vertical versions",
      "Licensed music and optional voiceover",
      "Caption file and thumbnail set",
    ],
    faqs: [
      {
        q: "How long should a book trailer be?",
        a: "Thirty seconds works hardest on social. We often deliver a longer sixty second cut for your website and events.",
      },
      {
        q: "Do you use live action or animation?",
        a: "Both, depending on the book. Memoir often suits live action; fantasy and children's titles usually shine in animation.",
      },
      {
        q: "Can I use the trailer in paid advertising?",
        a: "Yes, all footage and music are licensed for commercial and paid use.",
      },
    ],
  },
  {
    path: "/book-marketing",
    title: "Book Marketing",
    navLabel: "Marketing",
    tagline: "Finding the readers who were already looking for your book.",
    blurb:
      "Launch campaigns, retail optimisation, reviews and advertising built on real numbers.",
    image: marketing,
    intro: [
      "Most books do not fail because they are bad. They fail because nobody knew they existed. Marketing is simply the work of putting the book in front of the people it was written for.",
      "We build a campaign around your title's actual audience — categories, keywords, comparable authors, reviewer lists and paid placements — and report on what each part is doing.",
    ],
    highlights: [
      {
        title: "Metadata that gets found",
        text: "Categories, keywords and descriptions rewritten for how readers really search.",
      },
      {
        title: "Reviews with real reach",
        text: "Outreach to reviewers, bookstagrammers and podcasts who cover your genre.",
      },
      {
        title: "Measured advertising",
        text: "Small, tested ad spend on the platforms where your readers already buy.",
      },
    ],
    deliverables: [
      "Audience and competitor research",
      "Retail listing and metadata optimisation",
      "Launch plan with a week-by-week calendar",
      "Press release and media kit",
      "Reviewer and influencer outreach",
      "Monthly performance reporting",
    ],
    faqs: [
      {
        q: "When should marketing start?",
        a: "Ideally eight to twelve weeks before release, while pre-orders and reviewer copies can still do their job.",
      },
      {
        q: "Do you guarantee bestseller status?",
        a: "No, and be wary of anyone who does. We guarantee the work, the transparency and the reporting.",
      },
      {
        q: "Is advertising spend included?",
        a: "Ad budget is separate and always paid on accounts you own, so you keep the data.",
      },
    ],
  },
  {
    path: "/book-printing",
    title: "Book Printing",
    navLabel: "Printing",
    tagline: "Paper you want to hold, binding that lasts.",
    blurb:
      "Short runs, offset runs and print-on-demand, produced to the standard your book deserves.",
    image: printing,
    intro: [
      "The physical book is still where readers form their strongest impression. Paper weight, binding, finish and colour accuracy quietly tell people how seriously to take what is inside.",
      "We help you choose the right production method for your quantity and budget, supply proofs before the run, and check colour so the delivered cartons match what you approved.",
    ],
    highlights: [
      {
        title: "Physical proofs",
        text: "A printed proof copy in your hands before any full run begins.",
      },
      {
        title: "Stock and finish choices",
        text: "Cream or white stock, matt or gloss lamination, spot UV, foil and embossing.",
      },
      {
        title: "Print on demand too",
        text: "No warehouse, no upfront run — copies printed as orders arrive.",
      },
    ],
    deliverables: [
      "Print specification and quantity advice",
      "Press-ready file preparation",
      "Physical proof copy",
      "Colour management and quality checks",
      "Short-run, offset or print-on-demand production",
      "Delivery coordination Australia-wide",
    ],
    faqs: [
      {
        q: "What is the minimum order?",
        a: "As few as twenty-five copies for a short run, or one at a time through print on demand.",
      },
      {
        q: "Paperback or hardcover?",
        a: "Paperback suits fiction and general non-fiction; hardcover suits gift books, memoirs and premium editions. Many authors do both.",
      },
      {
        q: "Can you print in colour throughout?",
        a: "Yes — full-colour interiors are standard for children's books, cookbooks and illustrated titles.",
      },
    ],
  },
  {
    path: "/author-website",
    title: "Author Website",
    navLabel: "Author Website",
    tagline: "A home for your work that you actually own.",
    blurb:
      "Fast, elegant author sites with a mailing list, book pages and an events calendar.",
    image: authorWebsite,
    intro: [
      "Social platforms come and go, and their reach is rented. An author website is the one place online that belongs to you, collects your readers' email addresses, and keeps working between releases.",
      "We design and build the site, connect your mailing list, and hand it over with a simple editor so you can post news without calling a developer.",
    ],
    highlights: [
      {
        title: "Designed around the book",
        text: "Your cover, your palette, your voice — not a recycled template.",
      },
      {
        title: "Mailing list built in",
        text: "A reader magnet and signup flow so every visit can become a subscriber.",
      },
      {
        title: "Yours to edit",
        text: "Add news, events and new titles yourself in a few minutes.",
      },
    ],
    deliverables: [
      "Custom design across five to seven pages",
      "Book, about, news and contact sections",
      "Mailing list integration and signup incentive",
      "Retailer buy links and events calendar",
      "Search and social preview setup",
      "Handover training session",
    ],
    faqs: [
      {
        q: "Do I need a website before my book is out?",
        a: "Ideally yes. A live site during the pre-order period gives reviewers and media somewhere credible to land.",
      },
      {
        q: "Who owns the domain and hosting?",
        a: "You do. Everything is registered in your name and handed over with the logins.",
      },
      {
        q: "Can you sell books directly from it?",
        a: "Yes, we can add direct sales alongside retailer links if you want to keep more of the margin.",
      },
    ],
  },
  {
    path: "/book-illustration",
    title: "Book Illustration",
    navLabel: "Illustration",
    tagline: "Artwork with a point of view.",
    blurb:
      "Character design, spreads and spot art in a style chosen to suit your story.",
    image: illustration,
    intro: [
      "Illustration is storytelling in a second language. Done well, it carries the emotion that the text leaves unsaid — which is why we match every project to an illustrator whose natural style already fits the book.",
      "You approve character sheets and roughs before any final art begins, so there are no expensive surprises at the colour stage.",
    ],
    highlights: [
      {
        title: "Style matched to the story",
        text: "Watercolour, digital, line and ink, or collage — chosen for your book, not our habit.",
      },
      {
        title: "Approve at rough stage",
        text: "Character sheets and pencil roughs are signed off before final rendering.",
      },
      {
        title: "Print-safe artwork",
        text: "Delivered at full print resolution with bleed and safe margins built in.",
      },
    ],
    deliverables: [
      "Style exploration and sample art",
      "Character design sheets",
      "Rough layouts for every spread",
      "Final full-colour illustrations",
      "Spot illustrations and chapter openers",
      "Print-resolution files with bleed",
    ],
    faqs: [
      {
        q: "How many illustrations does a picture book need?",
        a: "Typically twelve to fourteen spreads for a thirty-two page picture book, plus cover art.",
      },
      {
        q: "Who owns the artwork?",
        a: "You do. Full commercial rights transfer to you on final payment.",
      },
      {
        q: "Can you illustrate non-fiction?",
        a: "Yes — diagrams, maps, botanical plates and technical illustration are all part of our range.",
      },
    ],
  },
  {
    path: "/audiobook",
    title: "Audiobook Production",
    navLabel: "Audiobook",
    tagline: "Your book, read the way it was meant to be heard.",
    blurb:
      "Studio narration, direction and mastering to full retail audio standards.",
    image: audiobook,
    intro: [
      "Audio is the fastest growing way people read, and for memoir and non-fiction especially, a narrated edition often outsells the ebook. It is also the format most likely to be rejected for technical faults.",
      "We handle casting, direction, recording, proofing and mastering, and deliver files that meet the loudness and file standards the major audio retailers enforce.",
    ],
    highlights: [
      {
        title: "Narrator auditions",
        text: "Hear three voices reading your actual pages before you choose.",
      },
      {
        title: "Directed sessions",
        text: "A producer in the session catching mispronunciations and flat reads as they happen.",
      },
      {
        title: "Retail-compliant masters",
        text: "Mastered to platform loudness specs so your files are accepted first time.",
      },
    ],
    deliverables: [
      "Narrator casting and auditions",
      "Manuscript prep and pronunciation guide",
      "Directed studio recording",
      "Line-by-line audio proofing",
      "Mastering to retail specifications",
      "Chaptered files plus retail audio sample",
    ],
    faqs: [
      {
        q: "Can I narrate my own book?",
        a: "Often the best choice for memoir and business books. We will coach you and record you properly.",
      },
      {
        q: "How long does recording take?",
        a: "Roughly one studio hour for every finished audio hour, plus proofing and mastering time.",
      },
      {
        q: "Where will the audiobook be sold?",
        a: "On the major audiobook platforms and library services, distributed under your name.",
      },
    ],
  },
  {
    path: "/childrens-book-publishers",
    title: "Children's Book Publishing",
    navLabel: "Children's Books",
    tagline: "Books small hands will keep coming back to.",
    blurb:
      "Picture books, early readers and middle grade — illustrated, typeset and printed with care.",
    image: portfolioCovers,
    intro: [
      "Children's publishing has rules of its own: word counts, reading levels, page signatures, gutter safety and durability all matter as much as the story itself.",
      "We publish picture books, early readers and middle grade titles with editors and illustrators who work in children's literature every day, and we print them to survive real children.",
    ],
    highlights: [
      {
        title: "Age-appropriate editing",
        text: "Vocabulary, sentence length and reading level checked against the age band you are writing for.",
      },
      {
        title: "Illustration and text as one",
        text: "Words and pictures planned together across the spread, the way picture books actually work.",
      },
      {
        title: "Built to be handled",
        text: "Board, laminated and sewn binding options for books that get loved hard.",
      },
    ],
    deliverables: [
      "Reading level and word count assessment",
      "Story structure and pacing edit",
      "Full illustration package",
      "Picture book page plan and typesetting",
      "Print production in board, paperback or hardcover",
      "School, library and retail listing setup",
    ],
    faqs: [
      {
        q: "How long should a picture book be?",
        a: "Thirty-two pages is the standard, with a text length of roughly five hundred to a thousand words.",
      },
      {
        q: "Do I need to find my own illustrator?",
        a: "No. We match you with an illustrator from our roster and manage the whole collaboration.",
      },
      {
        q: "Can the book reach schools and libraries?",
        a: "Yes. We set up the library metadata and distribution channels those buyers use.",
      },
    ],
  },
];

export const serviceByPath = (path: string) => services.find((s) => s.path === path);

import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <img src={logo} alt="Australian eBook Publishers" className="h-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
            An Australian publishing house for authors who want their book made properly — edited,
            designed, printed and put in front of real readers.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-primary-foreground">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/65">
            <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
            <li><Link to="/our-story" className="transition-colors hover:text-primary">Our Story</Link></li>
            <li><Link to="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link></li>
            <li><Link to="/testimonials" className="transition-colors hover:text-primary">Testimonials</Link></li>
            <li><Link to="/get-a-quote" className="transition-colors hover:text-primary">Get a Quote</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-primary-foreground">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/65">
            {services.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="transition-colors hover:text-primary">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-primary-foreground">Talk to us</h3>
          <ul className="mt-4 space-y-3.5 text-sm text-primary-foreground/65">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+61000000000" className="transition-colors hover:text-primary">
                +61 (3) 9022 1836
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:info@australianebookpublishers.au" className="transition-colors hover:text-primary">
                info@australianebookpublishers.au
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                42/Corner of Collins Street & Queen Street, 
                <br />
                Melbourne VIC 3000, Australia
              </span>
            </li>
          </ul>
          <p className="mt-5 text-xs text-primary-foreground/45">
            Contact details are placeholders — send us the real ones and we will swap them in.
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Australian eBook Publishers. All rights reserved.</p>
          <p>Authors keep 100% of their rights and royalties.</p>
        </div>
      </div>
    </footer>
  );
}

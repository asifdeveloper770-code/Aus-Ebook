import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/90 backdrop-blur-xl transition-all duration-500",
        scrolled ? "border-b border-border shadow-[var(--shadow-lift)]" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5  lg:px-8">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Australian eBook Publishers"
            className={cn("w-auto transition-all duration-500 p-0", scrolled ? "h-14" : "h-18")}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainLinks.slice(0, 1).map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-300", servicesOpen && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "absolute left-1/2 top-full w-[42rem] -translate-x-1/2 pt-3 transition-all duration-300",
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0",
              )}
            >
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-[var(--shadow-deep)]">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    onClick={() => setServicesOpen(false)}
                    className="group rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                  >
                    <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                      {s.navLabel}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{s.tagline}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.slice(1).map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+61000000000"
            className="flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
          >
            <Phone className="h-4 w-4" />
            +61 3 9022 1836
          </a>
          <Link
            to="/get-a-quote"
            className="relative overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md p-2 text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-5 pb-6 lg:hidden">
          <div className="flex flex-col py-2">
            {mainLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-semibold text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="eyebrow mt-4">Services</p>
          <div className="mt-2 grid gap-1">
            {services.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-muted-foreground"
              >
                {s.navLabel}
              </Link>
            ))}
          </div>
          <Link
            to="/get-a-quote"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
      activeProps={{ className: "text-primary" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
    </Link>
  );
}

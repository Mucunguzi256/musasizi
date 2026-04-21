export type NavLink = Readonly<{
  href: string;
  label: string;
}>;

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speeches", label: "Speeches" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

/** Footer column 2 — quick links (no About per site spec) */
export const FOOTER_QUICK_LINKS: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/speeches", label: "Speeches" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

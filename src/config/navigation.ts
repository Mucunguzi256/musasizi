export type NavLink = Readonly<{
  href: string;
  label: string;
  children?: readonly NavLink[];
}>;

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speeches", label: "Speeches" },
  { href: "/blog", label: "News" },
  { 
    href: "/more", 
    label: "More",
    children: [
      { href: "/projects", label: "Achievements" },
      { href: "/gallery", label: "Gallery" },
      { href: "/blog", label: "Blog" },
    ]
  },
] as const;

export const FOOTER_QUICK_LINKS: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speeches", label: "Speeches" },
  { href: "/blog", label: "News" },
  { href: "/projects", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;
import { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Our Team", href: "/about#team" },
      { label: "Transparency", href: "/about#transparency" },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Education", href: "/our-work/education" },
      { label: "Healthcare", href: "/our-work/healthcare" },
      { label: "Livelihood", href: "/our-work/livelihood" },
      { label: "Environment", href: "/our-work/environment" },
      { label: "Where We Work", href: "/our-work#map" },
    ],
  },
  { label: "Impact Stories", href: "/stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

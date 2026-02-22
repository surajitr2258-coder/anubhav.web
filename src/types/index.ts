export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  color: string;
  stats: Stat[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  person: string;
  location: string;
  category: string;
  date: string;
  readTime: string;
  quote: string;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  type: "donor" | "volunteer" | "beneficiary" | "partner";
}

export interface Partner {
  name: string;
  logo: string;
  url?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DonationAmount {
  value: number;
  impact: string;
}

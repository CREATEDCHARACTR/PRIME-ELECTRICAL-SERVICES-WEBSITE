import type { FC, SVGProps, ReactNode } from 'react';

export interface Service {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface ServiceCategory {
  emoji: string;
  title: string;
  description: string;
  services: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface Project {
  image: string;
  title:string;
  location: string;
  category: string;
  description: string;
  path: string;
  alt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  alt: string;
  excerpt: string;
  content: ReactNode;
}
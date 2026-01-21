/**
 * Global Type Definitions for React Portfolio
 * This file contains all TypeScript types and interfaces used across the application
 */

import { Variants } from "framer-motion";

// Navigation
 interface NavLink {
  label: string;
  href: string;
}

// Skills & Languages
 interface CodingLanguage {
  label: string;
  icon: string;
}

// Education
 interface EducationItem {
  school: string;
  duration: string;
  credential: string;
}

// Projects
 interface ProjectCard {
  name: string;
  description: string;
  code: string[];
  repo: string;
  website: string;
  imgURL: string;
}

 interface ProjectCardProps extends ProjectCard {
  index: number;
}

// Button Component
 interface ButtonProps {
  label: string;
  icon: string;
  link?: string;
}

// Code Card Component
 interface CodeCardProps {
  codeName: string;
  icon: string;
  index: number;
}

// Animation Variants (Framer Motion)
 type AnimationVariants = Variants;

// Media Query Response
 interface MediaQueryResponse {
  query: string;
}

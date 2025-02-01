import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  YEAR: new Date().getFullYear(),
  NAME: "Andrew Skinner",
  EMAIL: "andrew@andrewskinner.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Andrew Skinner is a founder and angel investor residing in Los Angeles, CA.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const INVESTMENTS: Metadata = {
  TITLE: "Investments",
  DESCRIPTION: "I invest primarily in early stage startups in the consumer space.",
};

export const SOCIALS: Socials = [
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/arskinner",
  }
];

import type { Site, Metadata, Socials, Resume, Education } from "@types";

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

export const WORK: Resume = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
  BIO: "Product and technology leader with 20+ years of experience building successful, scalable, products and teams for early stage startups up to Fortune 100 companies. Proven track record of innovative technology thinking, strategic product planning, and building profitable businesses in a wide range of industries.",
  EXPERTISE: [
    "Product Management",
    "Technology Strategy",
    "Remote Teams",
    "Systems Design",
    "DevOps & CI/CD",
    "Infrastructure & Scaling",
    "Serverless Architecture",
    "Mobile Development",
    "VOD & Streaming",
  ],
};

export const EDUCATION: Education = {
  SCHOOL: "Brown University",
  YEAR: "2008",
  CONCENTRATION: "B.A. Commerce, Organizations, and Entrepreneurship",
  HONORS: "Magna Cum Laude",
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
  },
];

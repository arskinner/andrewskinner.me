export type Site = {
  YEAR: number;
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Resume = {
  TITLE: string,
  DESCRIPTION: string,
  BIO: string,
  EXPERTISE: string[],
}

export type Education = {
  SCHOOL: string,
  YEAR: string,
  CONCENTRATION: string,
  HONORS: string,
}

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Project = {
  title: string;
  year: string;
  blurb: string;
  slug?: string;
  href?: string;
  tags?: string[];
  // add these:
  stack?: string[];
  highlights?: string[];
};


export type ExperienceItem = {
  company: string;
  role: string;
  time: string;
  points: string[];
};

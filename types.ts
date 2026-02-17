
export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}

export interface Project {
  title: string;
  stack: string;
  description: string[];
  link?: string;
}

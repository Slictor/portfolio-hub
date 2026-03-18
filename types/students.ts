export interface StudentProfile {
  id: string;
  name: string;
  image?: string;
  title: string;
  shortBio: string;
  stack: string[];
  competenceTags: string[];
  links: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  order: number;
}
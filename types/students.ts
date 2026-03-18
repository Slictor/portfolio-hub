export interface StudentProfile {
  id:string;
  initials: string;
  avatarBg: string;
  name: string;
  image?: string;
  role: string;
  bio: string;
  longBio?: string;
  tags: string[];
  competenceTags: string[];
  linkedIn?: string;
  portfolio?: string;
}
export interface StudentProfile {
  id:number;
  initials: string;
  avatarBg: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  competenceTags: string[];
  linkedIn?: string;
  portfolio?: string;
}
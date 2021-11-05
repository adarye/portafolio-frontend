import { Resume } from "./resume";

export class CategoriesWithResumes {
  id: number;
  name: string;
  description: string;
  color?: string;
  created_at?: string;
  updated_at?: string;
  resumes: Resume[];
}


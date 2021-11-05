import { Skill } from "./skill";

export class CategoriesWithSkills {
  id: number;
  name: string;
  description: string;
  color: string;
  created_at?: string;
  updated_at?: string;
  skills: Skill[];
}

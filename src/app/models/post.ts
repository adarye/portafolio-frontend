import { BlogCategory } from "./blog-category";
import { User } from "./user";

 export class Post {
  id: number;
  title: string;
  image: string;
  content: string;
  state: number;
  sent: number;
  id_user: number;
  id_category: number;
  created_at?: any;
  updated_at?: any;
  category?: BlogCategory;
  user?: User;
}

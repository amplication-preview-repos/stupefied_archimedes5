import { Author } from "../author/Author";

export type BlogPost = {
  author?: Author | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};

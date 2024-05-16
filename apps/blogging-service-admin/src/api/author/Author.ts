import { BlogPost } from "../blogPost/BlogPost";

export type Author = {
  blogPosts?: Array<BlogPost>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};

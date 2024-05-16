import { BlogPostUpdateManyWithoutAuthorsInput } from "./BlogPostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  blogPosts?: BlogPostUpdateManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
};

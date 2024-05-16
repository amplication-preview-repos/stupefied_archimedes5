import { BlogPostCreateNestedManyWithoutAuthorsInput } from "./BlogPostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  blogPosts?: BlogPostCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
};

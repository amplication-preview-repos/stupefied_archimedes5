import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BlogPostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};

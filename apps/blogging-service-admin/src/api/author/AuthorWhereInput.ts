import { BlogPostListRelationFilter } from "../blogPost/BlogPostListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthorWhereInput = {
  blogPosts?: BlogPostListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

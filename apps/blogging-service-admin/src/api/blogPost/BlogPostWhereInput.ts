import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogPostWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};

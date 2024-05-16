import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BlogAnalyticsWhereInput = {
  blogPost?: StringNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  shares?: IntNullableFilter;
  views?: IntNullableFilter;
};

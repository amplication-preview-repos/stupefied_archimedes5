import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

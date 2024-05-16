import { SortOrder } from "../../util/SortOrder";

export type BlogAnalyticsOrderByInput = {
  blogPost?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  shares?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};

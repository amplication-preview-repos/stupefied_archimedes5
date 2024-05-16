import { BlogAnalyticsWhereInput } from "./BlogAnalyticsWhereInput";
import { BlogAnalyticsOrderByInput } from "./BlogAnalyticsOrderByInput";

export type BlogAnalyticsFindManyArgs = {
  where?: BlogAnalyticsWhereInput;
  orderBy?: Array<BlogAnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};

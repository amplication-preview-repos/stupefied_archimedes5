import { BlogAnalytics as TBlogAnalytics } from "../api/blogAnalytics/BlogAnalytics";

export const BLOGANALYTICS_TITLE_FIELD = "blogPost";

export const BlogAnalyticsTitle = (record: TBlogAnalytics): string => {
  return record.blogPost?.toString() || String(record.id);
};

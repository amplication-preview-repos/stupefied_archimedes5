import * as graphql from "@nestjs/graphql";
import { BlogAnalyticsResolverBase } from "./base/blogAnalytics.resolver.base";
import { BlogAnalytics } from "./base/BlogAnalytics";
import { BlogAnalyticsService } from "./blogAnalytics.service";

@graphql.Resolver(() => BlogAnalytics)
export class BlogAnalyticsResolver extends BlogAnalyticsResolverBase {
  constructor(protected readonly service: BlogAnalyticsService) {
    super(service);
  }
}

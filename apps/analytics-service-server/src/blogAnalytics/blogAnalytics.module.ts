import { Module } from "@nestjs/common";
import { BlogAnalyticsModuleBase } from "./base/blogAnalytics.module.base";
import { BlogAnalyticsService } from "./blogAnalytics.service";
import { BlogAnalyticsController } from "./blogAnalytics.controller";
import { BlogAnalyticsResolver } from "./blogAnalytics.resolver";

@Module({
  imports: [BlogAnalyticsModuleBase],
  controllers: [BlogAnalyticsController],
  providers: [BlogAnalyticsService, BlogAnalyticsResolver],
  exports: [BlogAnalyticsService],
})
export class BlogAnalyticsModule {}

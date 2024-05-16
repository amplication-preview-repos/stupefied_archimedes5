import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogAnalyticsService } from "./blogAnalytics.service";
import { BlogAnalyticsControllerBase } from "./base/blogAnalytics.controller.base";

@swagger.ApiTags("blogAnalytics")
@common.Controller("blogAnalytics")
export class BlogAnalyticsController extends BlogAnalyticsControllerBase {
  constructor(protected readonly service: BlogAnalyticsService) {
    super(service);
  }
}

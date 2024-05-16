import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogAnalyticsServiceBase } from "./base/blogAnalytics.service.base";

@Injectable()
export class BlogAnalyticsService extends BlogAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

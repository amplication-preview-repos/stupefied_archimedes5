import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BlogAnalyticsController } from "../blogAnalytics.controller";
import { BlogAnalyticsService } from "../blogAnalytics.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  blogPost: "exampleBlogPost",
  createdAt: new Date(),
  id: "exampleId",
  likes: 42,
  shares: 42,
  updatedAt: new Date(),
  views: 42,
};
const CREATE_RESULT = {
  blogPost: "exampleBlogPost",
  createdAt: new Date(),
  id: "exampleId",
  likes: 42,
  shares: 42,
  updatedAt: new Date(),
  views: 42,
};
const FIND_MANY_RESULT = [
  {
    blogPost: "exampleBlogPost",
    createdAt: new Date(),
    id: "exampleId",
    likes: 42,
    shares: 42,
    updatedAt: new Date(),
    views: 42,
  },
];
const FIND_ONE_RESULT = {
  blogPost: "exampleBlogPost",
  createdAt: new Date(),
  id: "exampleId",
  likes: 42,
  shares: 42,
  updatedAt: new Date(),
  views: 42,
};

const service = {
  createBlogAnalytics() {
    return CREATE_RESULT;
  },
  blogAnalyticsItems: () => FIND_MANY_RESULT,
  blogAnalytics: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("BlogAnalytics", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BlogAnalyticsService,
          useValue: service,
        },
      ],
      controllers: [BlogAnalyticsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /blogAnalytics", async () => {
    await request(app.getHttpServer())
      .post("/blogAnalytics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /blogAnalytics", async () => {
    await request(app.getHttpServer())
      .get("/blogAnalytics")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /blogAnalytics/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blogAnalytics"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /blogAnalytics/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blogAnalytics"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /blogAnalytics existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/blogAnalytics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/blogAnalytics")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

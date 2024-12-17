import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';
import { ProjectsService } from '@server/projects/projects.service';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly projectsService: ProjectsService,
  ) {}

  appRouter = this.trpc.router({
    projects: this.trpc.procedure.query(async () => {
      return this.projectsService.findAll();
    }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];

import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { ProjectsService } from '@server/projects/projects.service';
import { DatabaseService } from '@server/database/database.service';

@Module({
  imports: [],
  providers: [TrpcService, TrpcRouter, ProjectsService, DatabaseService]
})
export class TrpcModule {}

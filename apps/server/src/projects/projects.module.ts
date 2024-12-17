import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { DatabaseService } from '@server/database/database.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, DatabaseService],
})
export class ProjectsModule {}

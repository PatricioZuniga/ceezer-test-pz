import { Module } from '@nestjs/common';
import { AppController } from '@server/app.controller';
import { AppService } from '@server/app.service';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from '@server/trpc/trpc.module';
import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ConfigModule.forRoot(), TrpcModule, DatabaseModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

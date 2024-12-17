import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '@server/database/database.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll() {
    return this.databaseService.project.findMany({
      include: {
        country: true,
        supplier: true,
      },
    });
  }
}

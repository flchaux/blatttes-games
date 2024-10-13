import { Controller, Get, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { QueryResolver } from './queryResolver';

@Controller()
export class AppController {
  constructor(
    private readonly queryResolver: QueryResolver,
    private readonly queryBus: QueryBus
  ) { }

  @Get("/query")
  async getQuery(@Query("q") queryName: string, @Query() allParameters: any): Promise<any> {
    const type = this.queryResolver.get(queryName);
    return await this.queryBus.execute(new type(allParameters));
  }
}

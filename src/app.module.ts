import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryResolver } from './queryResolver';
import { GetGamesQueryHandler } from './getGames/getGames.query.handler';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [{
    provide: QueryResolver,
    useValue: QueryResolver.getInstance(),
  }, GetGamesQueryHandler],
})
export class AppModule { }

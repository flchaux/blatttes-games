import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import { configDotenv } from 'dotenv';

configDotenv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(join(__dirname, '..', 'public'))
  app.use(express.static(join(__dirname, '..', 'public')));
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.get('*.html', (req, res) => {
    res.sendFile(join(__dirname, '..', 'dist', 'public', 'index.html'));
  });
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  Logger.debug(`Mongoose: ${process.env.MONGODB_URL}`);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig, IAppConfig } from './config/app-config';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env`,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config: IAppConfig = app.get<IAppConfig>(appConfig.KEY);

  await app.listen(3000);
}
bootstrap();

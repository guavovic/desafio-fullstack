import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('Bootstrap');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Imobia API')
    .setDescription('API para o sistema de gerenciamento de clientes e imóveis')
    .setContact('Gustavo Victor', 'https://', '@gmail.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .setExternalDoc('Imobia API Docs', 'https://example.com/docs')
    .setVersion('1.0')
    .addTag('imobia')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();

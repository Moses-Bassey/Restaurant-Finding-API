import { NestFactory } from '@nestjs/core';
import { Logger, ValidationError, ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/modules/app.module';
import { ValidationFilter } from 'src/filters/validation.filter';
import { ValidationException } from 'src/exception/validation.exception';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalFilters(new ValidationFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map((error) => {
          return `${error.property} has wrong value ${error.value}.`;
          // return {
          //   error: `${error.property} has wrong value ${error.value}.`,
          //   message: Object.values(error.constraints).join(''),
          // };
        });
        return new ValidationException(messages[0]);
      },
    }),
  );
  await app.listen(process.env.PORT);

  console.log(`Appication running on ${process.env.PORT}`);
}

bootstrap();

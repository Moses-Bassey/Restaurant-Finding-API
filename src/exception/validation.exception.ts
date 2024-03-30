import { BadRequestException, Logger } from '@nestjs/common';

interface Error {
  error: string;
  message: string;
}

export class ValidationException extends BadRequestException {
  constructor(public validationErrors: string) {
    super();
    throw new BadRequestException(validationErrors);
  }
}

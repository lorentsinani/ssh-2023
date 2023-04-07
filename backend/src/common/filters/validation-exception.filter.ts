import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Response } from 'express';

@Catch(ValidationError)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: ValidationError[], host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const statusCode = HttpStatus.BAD_REQUEST;
    const validationErrors = exception.map((error: { constraints: any; property: any }) => {
      const { constraints, property } = error;
      const errorMessage = Object.values(constraints).join(', ');
      return { property, errorMessage };
    });
    response.status(statusCode).json({
      statusCode,
      message: 'Validation failed',
      errors: validationErrors,
    });
  }
}

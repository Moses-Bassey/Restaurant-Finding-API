import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Transaction } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const httpContext = context.switchToHttp();
    const req = httpContext.getRequest();
    // const transaction: Transaction = await new Sequelize({
    //   dialect: 'mysql',
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT ?? '5432'),
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_NAME,
    // }).transaction({
    //   logging: true, // Just for debugging purposes
    // });
    // req.transaction = transaction;
    return next.handle().pipe(
      tap(async () => {
        // await transaction.commit();
      }),
      catchError(async (err) => {
        // await transaction.rollback();
        // return new Error(err);
        return err.response;
      }),
    );
  }
}

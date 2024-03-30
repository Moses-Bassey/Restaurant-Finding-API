import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
import { EventEmitterModule } from '@nestjs/event-emitter';

import configuration from 'config/app.config';
import { RestaurantsModule } from 'src/modules/restaurants.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler/dist';
import { APP_GUARD } from '@nestjs/core';

config();

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 10
    }]),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    RestaurantsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

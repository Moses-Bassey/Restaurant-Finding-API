import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { RestaurantsService } from 'src/services/restaurants.service';
import { RestaurantsController } from 'src/controllers/restaurants.controller';
import { Miscellaneous } from 'src/utils/miscellaneous';

@Module({
  imports: [
    RestaurantsModule,
    PassportModule,
    ConfigModule,
    Miscellaneous,
  ],
  providers: [
    Miscellaneous,
    RestaurantsService,
  ],
  controllers: [RestaurantsController],
})
export class RestaurantsModule {}

import { IsNotEmpty, IsString, IsNumber, MinLength, MaxLength, IsNotIn, IsOptional } from 'class-validator';
import { IsNull } from 'sequelize-typescript';
import { IsInRange } from 'src/filters/custom.range.validators';

export class RestaurantsRequestDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  city: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  address: string;

  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  longitude: number;

  @IsNotEmpty()
  @IsOptional()
  @IsInRange(1, 5)
  rating?: number;
}

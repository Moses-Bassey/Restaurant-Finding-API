/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, HttpCode, HttpStatus, Put, Query, Param, Delete, BadRequestException} from '@nestjs/common';
import { RestaurantsService } from '../services/restaurants.service'
import { RestaurantsRequestDto } from 'src/dto/restaurant.request.dto'; 
const API_VERSION = 'v1'

@Controller(`${API_VERSION}/restaurants`)
export class RestaurantsController {
    
    constructor(
        private restaurantService: RestaurantsService,
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async fetchRestaurants(@Query('longitude') longitude: number,
     @Query('latitude') latitude: number, @Query('city') city: string, 
     @Query('distance') radius: number) : Promise<any>{
        if (latitude == undefined || longitude == undefined || radius == undefined || radius < 0)
            throw new BadRequestException('Invalid query params')
        return {response: await this.restaurantService.findRestaurants({longitude, latitude, city, radius})}
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addRestaurant(@Body() reqBody: RestaurantsRequestDto) : Promise<any>{
        return {response: await this.restaurantService.addRestaurant(reqBody)}
    }
    
    @Get('/:restaurantId')
    @HttpCode(HttpStatus.OK)
    async fetchRestaurant(@Param('restaurantId') restaurantId: number) : Promise<any>{
        return {response: await this.restaurantService.fetchRestaurantById(restaurantId)}
    }

    @Put('/:restaurantId')
    @HttpCode(HttpStatus.OK)
    async updateRestaurant(@Body() reqBody: RestaurantsRequestDto, @Param('restaurantId') restaurantId: number) : Promise<any>{
        return {response: await this.restaurantService.updateRestaurant(restaurantId,reqBody)}
    }

    @Delete('/:restaurantId')
    @HttpCode(HttpStatus.OK)
    async deleteRestaurant( @Param('restaurantId') restaurantId: number){
        return {response: await this.restaurantService.deleteRestaurantById(restaurantId)} 
    }
}

import { JwtService } from '@nestjs/jwt';
import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IRestaurants } from 'src/interfaces/resturants.interfaces'
import { RestaurantsRequestDto } from 'src/dto/restaurant.request.dto';
import { Miscellaneous } from 'src/utils/miscellaneous';
import * as _ from 'underscore';

const restaurantStore: IRestaurants[] = [
  {
    id: 1,
    name: "Cafe Delight",
    address: "123 Main St, New York, NY",
    latitude: 40.7112,
    longitude: -74.0055,
    city: "New York",
    createdAt: new Date('2024-03-30T09:25:25.769Z'),
    updatedAt: new Date('2024-03-30T09:25:25.769Z'),
  },
];

@Injectable()
export class RestaurantsService {
  constructor(
    private micellaneous: Miscellaneous
  ) {}

  async addRestaurant(reqBody: RestaurantsRequestDto)
  {
    restaurantStore.push({...reqBody, id: restaurantStore.length + 1, createdAt: new Date(), updatedAt: new Date()});
    return reqBody;
  }

  async updateRestaurant(restaurantId, reqBody: RestaurantsRequestDto) {

    const restaurant = await this.findRestaurantById(restaurantId);
    if (restaurant == null) throw new NotFoundException('Restaurant not found!')

    restaurantStore.map(data => {
      if (data.id == restaurant.id) {
        data.name = reqBody.name,
        data.address = reqBody.address,
        data.updatedAt = new Date(),
        data.city = reqBody.city,
        data.longitude = reqBody.longitude,
        data.latitude = reqBody.latitude,
        data.rating = reqBody.rating
      }
    })
    return reqBody;
  }

  async findRestaurants({longitude, latitude, city, radius}) : Promise<IRestaurants[]>
  {
    const nearbyRestaurants = this.findNearbyRestaurants({city, longitude,latitude, radius});
    return nearbyRestaurants;
  }

  async fetchRestaurantById(restaurantId): Promise<IRestaurants>
  {
    const restaurant = await this.findRestaurantById(restaurantId)
    if (restaurant == null) throw new NotFoundException('Restaurant not found!')

    return restaurant;
  }

  async deleteRestaurantById(restaurantId)
  {
    const restaurant = this.findRestaurantById(restaurantId);
    if (restaurant == null) throw new NotFoundException('Restaurant not found!')

    const index = restaurantStore.findIndex((restaurant) => restaurant.id === restaurantId);
    if (index !== -1) {
        restaurantStore.splice(index, 1);
    }
    return "restaurant deleted"
  }

  async findRestaurantById(resturantId: number) {
    for(let i = 0; i < restaurantStore.length; i++) {
      if (restaurantStore[i].id == resturantId)
        return restaurantStore[i]
    }
  }

  async findNearbyRestaurants({city, latitude, longitude, radius}) {
    if (city) {
      const isNotInRestaurants = await this.isCityNotInRestaurants(city);
      if (isNotInRestaurants)
        throw new NotFoundException(`City not found!`);
    }

    const res =  restaurantStore.filter((restaurant) => {
        const distance = this.micellaneous.calculateDistance(latitude, longitude, restaurant.latitude, restaurant.longitude);
        return restaurant.city === city;
    });

    return res;
  }

  async isCityNotInRestaurants (city){
    return restaurantStore.every((restaurant) => restaurant.city !== city);
  }
}

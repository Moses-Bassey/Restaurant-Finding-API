
export interface IRestaurants {
  id: number;
  name: string,
  address: string,
  latitude: number,
  longitude: number,
  city: string;
  rating?: number;
  updatedAt?: Date,
  createdAt?: Date,
}

import { RestaurantInterfaceResponse } from "./restaurantInterface";

export const getAllRestaurants = async (pageParam: number, limit: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/restaurants?page=${pageParam}&limit=${limit}`
  );

  const data = await response.json();

  return data as RestaurantInterfaceResponse;
};

export const getRestaurantById = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/restaurants/${id}`
  );

  const data = await response.json();

  return data as RestaurantInterfaceResponse;
};

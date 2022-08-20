import React from "react";
import { RestaurantInterface } from "../../../repositories/restaurant/restaurantInterface";
import { CardRestaurant } from "../../atoms/CardRestaurant/CardRestaurant";
import { ContentSearch } from "../../atoms/ContentSearch/ContentSeacrch";
import { ContainerCard, Container } from "./style";

interface Props {
  restaurants:
    | {
        pages: {
          data: RestaurantInterface[];
        }[];
      }
    | undefined;

  searchText: string;
}

export const ContainerCardRestaurant = ({ restaurants, searchText }: Props) => {
  return (
    <Container>
      <ContentSearch searchText={searchText} />
      <ContainerCard>
        {restaurants?.pages.map((response) =>
          response.data.map((restaurant) => (
            <CardRestaurant
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.name}
              backgroundImage={restaurant.image}
            />
          ))
        )}
      </ContainerCard>
    </Container>
  );
};

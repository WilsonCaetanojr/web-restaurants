import React from "react";
import { theme } from "../../../libs/styledComponents";
import { RestaurantInterface } from "../../../repositories/restaurant/restaurantInterface";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { CardRestaurant } from "../../atoms/CardRestaurant/CardRestaurant";
import { ContentSearch } from "../../atoms/ContentSearch/ContentSeacrch";
import { InputSearch } from "../../atoms/InputSearch/InputSearch";
import { ContainerCard, Container, InputArea } from "./style";

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
  const { width } = useWindowDimensions();

  return (
    <Container>
      {width <= parseInt(theme.screens.mobile) && (
        <InputArea>
          <InputSearch placeholder="Encontre um restaurante" />
        </InputArea>
      )}

      <ContentSearch searchText={searchText} />
      <ContainerCard>
        {restaurants?.pages.map((response) =>
          response.data.map((restaurant) => (
            <CardRestaurant
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.name}
              image={restaurant.image}
            />
          ))
        )}
      </ContainerCard>
    </Container>
  );
};

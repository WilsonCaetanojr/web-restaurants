import React, { useContext } from "react";

import { GlobalContext } from "../../../contexts/GlobalContex";
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
}

export const ContainerCardRestaurant = ({ restaurants }: Props) => {
  const { width } = useWindowDimensions();
  const { searchText, setSearchText } = useContext(GlobalContext);

  return (
    <Container>
      {width <= parseInt(theme.screens.mobile) && (
        <InputArea>
          <InputSearch
            value={searchText}
            setValue={setSearchText}
            placeholder="Encontre um restaurante"
          />
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

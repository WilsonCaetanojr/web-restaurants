import Image from "next/image";
import React, { useContext } from "react";

import { GlobalContext } from "../../../contexts/GlobalContex";
import { theme } from "../../../libs/styledComponents";
import { RestaurantInterface } from "../../../repositories/restaurant/restaurantInterface";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { CardRestaurant } from "../../atoms/CardRestaurant/CardRestaurant";
import { ContentSearch } from "../../atoms/ContentSearch/ContentSeacrch";
import { InputSearch } from "../../atoms/InputSearch/InputSearch";
import GobackIcon from "../../../assets/icons/backIconBlack.png";
import {
  ContainerCard,
  Container,
  InputArea,
  WrapperSearchLabel,
} from "./style";
import { cleanText } from "../../../utils/functions/cleanText";

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

  const handleFilter = (restaurant: RestaurantInterface) => {
    const textToFilter = cleanText(searchText);
    return (
      cleanText(restaurant.name).includes(textToFilter) ||
      cleanText(restaurant.description).includes(textToFilter) ||
      cleanText(restaurant.telephone).includes(textToFilter)
    );
  };

  return (
    <Container>
      {width <= parseInt(theme.screens.mobile) && (
        <>
          {!!searchText && (
            <WrapperSearchLabel>
              <Image
                width={6}
                height={10}
                src={GobackIcon}
                alt="Seta para esquerda"
                onClick={() => setSearchText("")}
              />

              <h5>Resultado para</h5>

              <h2>
                {`${searchText.substring(0, 16)}${
                  searchText.length > 16 ? "..." : ""
                }`}
              </h2>
            </WrapperSearchLabel>
          )}

          <InputArea>
            <InputSearch
              value={searchText}
              setValue={setSearchText}
              placeholder="Encontre um restaurante"
            />
          </InputArea>
        </>
      )}

      <ContentSearch searchText={searchText} />
      <ContainerCard>
        {restaurants?.pages.map((response) =>
          response.data
            .filter(handleFilter)
            .map((restaurant) => (
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

import Image from "next/image";

import HeaderImage from "../../../assets/headerImage.png";
import { Header, InputArea } from "./style";
import { TitleHeader } from "../../atoms/TitleHeader/TitleHeader";
import { InputSearch } from "../../atoms/InputSearch/InputSearch";

export const HeaderRestaurants = () => {
  return (
    <Header backgoundImage={HeaderImage.src}>
      <TitleHeader />
      <InputArea>
        <InputSearch placeholder="Encontre um restaurante" />
      </InputArea>
    </Header>
  );
};

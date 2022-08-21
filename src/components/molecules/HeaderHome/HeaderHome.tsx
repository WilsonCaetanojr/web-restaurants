import { useContext } from "react";
import Image from "next/image";

import HeaderImage from "../../../assets/headerImage.png";
import HeaderImageMobile from "../../../assets/headerImageMobile.png";

import {
  Header,
  InputArea,
  BoderBottom,
  ContainerTitle,
  TextArea,
  LogoEasyFood,
} from "./style";
import { InputSearch } from "../../atoms/InputSearch/InputSearch";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { theme } from "../../../libs/styledComponents";
import { GlobalContext } from "../../../contexts/GlobalContex";
import EasyFood from "../../../assets/easyFood.png";

export const HeaderHome = () => {
  const { width } = useWindowDimensions();
  const { searchText, setSearchText } = useContext(GlobalContext);

  const widthMobile = parseInt(theme.screens.mobile);
  return (
    <Header
      image={width > widthMobile ? HeaderImage.src : HeaderImageMobile.src}
    >
      <ContainerTitle>
        {width > parseInt(theme.screens.mobile) && (
          <LogoEasyFood
            width={87}
            height={34}
            src={EasyFood}
            alt="Logo da Easy Food"
          />
        )}

        {!searchText && (
          <>
            <TextArea>
              <h1>Descubra novos sabores</h1>

              <label>Aqui eu converso com você sobre</label>
              <label>nossa proposta</label>
            </TextArea>
          </>
        )}
      </ContainerTitle>

      {width > widthMobile ? (
        <InputArea>
          <InputSearch
            value={searchText}
            setValue={setSearchText}
            placeholder="Encontre um restaurante"
          />
        </InputArea>
      ) : (
        <BoderBottom />
      )}
    </Header>
  );
};

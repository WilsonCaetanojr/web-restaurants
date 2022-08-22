import { useContext } from "react";

import HeaderWeb from "../../../assets/images/headerWeb.png";
import HeaderMobile from "../../../assets/images/headerMobile.png";

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
import EasyFood from "../../../assets/images/easyFood.png";

export const HeaderHome = () => {
  const { width } = useWindowDimensions();
  const { searchText, setSearchText } = useContext(GlobalContext);

  const widthMobile = parseInt(theme.screens.mobile);
  return (
    <Header image={width > widthMobile ? HeaderWeb.src : HeaderMobile.src}>
      <ContainerTitle>
        {width > parseInt(theme.screens.mobile) && (
          <LogoEasyFood
            width={87}
            height={34}
            src={EasyFood}
            alt="Logo da Easy Food"
            onClick={() => setSearchText("")}
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

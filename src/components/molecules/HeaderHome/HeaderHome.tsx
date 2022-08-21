import HeaderImage from "../../../assets/headerImage.png";
import HeaderImageMobile from "../../../assets/headerImageMobile.png";

import { Header, InputArea, BoderBottom } from "./style";
import { TitleHeader } from "../../atoms/TitleHeader/TitleHeader";
import { InputSearch } from "../../atoms/InputSearch/InputSearch";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { theme } from "../../../libs/styledComponents";

export const HeaderHome = () => {
  const { width } = useWindowDimensions();

  const widthMobile = parseInt(theme.screens.mobile);
  return (
    <Header
      image={width > widthMobile ? HeaderImage.src : HeaderImageMobile.src}
    >
      <TitleHeader />

      {width > widthMobile ? (
        <InputArea>
          <InputSearch placeholder="Encontre um restaurante" />
        </InputArea>
      ) : (
        <BoderBottom />
      )}
    </Header>
  );
};

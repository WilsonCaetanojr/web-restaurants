import Image from "next/image";

import { Container, Logo, TextArea } from "./style";
import EasyFood from "../../../assets/easyFood.png";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { theme } from "../../../libs/styledComponents";

export const TitleHeader = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      {width > parseInt(theme.screens.mobile) && (
        <Logo src={EasyFood} alt="Logo da Easy Food" />
      )}
      <TextArea>
        <h1>Descubra novos sabores</h1>

        <label>Aqui eu converso com você sobre</label>
        <label>nossa proposta</label>
      </TextArea>
    </Container>
  );
};

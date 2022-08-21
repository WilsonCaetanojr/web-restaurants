import Image from "next/image";

import { Container, Logo, TextRigth } from "./style";
import EasyFood from "../../../assets/easyFood.png";

export const TitleHeader = () => {
  return (
    <Container>
      <Logo src={EasyFood} alt="Logo da Easy Food" />
      <TextRigth>
        <h1>Descubra novos sabores</h1>

        <label>Aqui eu converso com você sobre</label>
        <label>nossa proposta</label>
      </TextRigth>
    </Container>
  );
};

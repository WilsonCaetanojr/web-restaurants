import Image from "next/image";

import { Container, Logo, TextRigth } from "./style";
import LogoGetIn from "../../../assets/logoGetIn.png";

export const TitleHeader = () => {
  return (
    <Container>
      <Logo src={LogoGetIn} alt="Logo Get>In" />
      <TextRigth>
        <h1>Descubra novos sabores</h1>

        <label>Aqui eu converso com você sobre</label>
        <label>nossa proposta</label>
      </TextRigth>
    </Container>
  );
};

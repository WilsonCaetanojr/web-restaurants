import Image from "next/image";
import { useRouter } from "next/router";

import { Header, WrapperDetails, Goback } from "./style";
import GobackIcon from "../../../assets/gobackIcon.png";
import { maskTelephone } from "../../../utils/mask/telephone";

export const HeaderDetail = ({
  name,
  logo,
  image,
  telephone,
  website,
}: {
  name: string;
  logo: string;
  image: string;
  telephone: string;
  website: string;
}) => {
  const { back } = useRouter();

  return (
    <Header image={image}>
      <Goback>
        <div onClick={back}>
          <Image src={GobackIcon} alt="Seta para esquerda" />
          <label>Voltar</label>
        </div>
      </Goback>
      <WrapperDetails>
        <Image width={100} height={100} src={logo} alt="Logo do restaurante" />

        <div>
          <h1>{name}</h1>

          <h6>{maskTelephone(telephone)}</h6>
          <h6>{website}</h6>
        </div>
      </WrapperDetails>
    </Header>
  );
};

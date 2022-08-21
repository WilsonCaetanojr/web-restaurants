import Image from "next/image";
import { useRouter } from "next/router";

import {
  Header,
  WrapperDetails,
  Goback,
  BoderBottom,
  ImageMobile,
} from "./style";
import GobackIcon from "../../../assets/gobackIcon.png";
import { maskTelephone } from "../../../utils/mask/telephone";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { theme } from "../../../libs/styledComponents";

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
  const { width } = useWindowDimensions();

  const widthMobile = parseInt(theme.screens.mobile);

  return (
    <Header image={image}>
      <Goback>
        <div onClick={back}>
          <Image src={GobackIcon} alt="Seta para esquerda" />
          {width > widthMobile && <label>Voltar</label>}
        </div>
      </Goback>

      {width > widthMobile ? (
        <WrapperDetails>
          <Image
            width={120}
            height={120}
            src={logo}
            alt="Logo do restaurante"
          />

          <div>
            <h1>{name}</h1>

            <h6>{maskTelephone(telephone)}</h6>
            <h6>{website}</h6>
          </div>
        </WrapperDetails>
      ) : (
        <>
          <BoderBottom>
            <ImageMobile image={logo} />
          </BoderBottom>
        </>
      )}
    </Header>
  );
};

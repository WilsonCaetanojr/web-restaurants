import { theme } from "../../../libs/styledComponents";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { maskTelephone } from "../../../utils/mask/telephone";
import { Container, Description, Line } from "./style";

export const BoxDetail = ({
  name,
  description,
  price_range,
  opening_hours,
  payment_methods,
  telephone,
  website,
}: {
  name: string;
  description: string;
  price_range: string;
  opening_hours: string;
  payment_methods: string;
  telephone: string;
  website: string;
}) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <div>
        {width <= parseInt(theme.screens.mobile) && <h1>{name}</h1>}

        <h6>Descriçāo</h6>
        <Description>{description}</Description>

        {width <= parseInt(theme.screens.mobile) && (
          <>
            <h6>Contato</h6>
            <h5>{maskTelephone(telephone)}</h5>
            <h5>{website}</h5>
          </>
        )}

        <h6>Faixa de preço</h6>
        <h5>{price_range}</h5>

        <Line />

        <h6>Horários de funcionamento</h6>
        <h5>{opening_hours}</h5>

        <h6>Formas de pagamento</h6>
        <h5>{payment_methods}</h5>
      </div>
    </Container>
  );
};

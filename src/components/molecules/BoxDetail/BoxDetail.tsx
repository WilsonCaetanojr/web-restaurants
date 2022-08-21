import { Container, Description, Line } from "./style";

export const BoxDetail = ({
  description,
  price_range,
  opening_hours,
  payment_methods,
}: {
  description: string;
  price_range: string;
  opening_hours: string;
  payment_methods: string;
}) => {
  return (
    <Container>
      <div>
        <h6>Descriçāo</h6>
        <Description>{description}</Description>

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

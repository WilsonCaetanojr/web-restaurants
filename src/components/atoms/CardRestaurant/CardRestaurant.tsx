import { CardStyled } from "./style";

interface Props {
  id: string;
  title: string;
  backgroundImage: string;
}

export const CardRestaurant = ({ id, title, backgroundImage }: Props) => {
  return (
    <CardStyled backgroundImage={backgroundImage}>
      <label>{title}</label>
    </CardStyled>
  );
};

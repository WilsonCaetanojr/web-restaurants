import { useRouter } from "next/router";
import { CardStyled } from "./style";

interface Props {
  id: string;
  title: string;
  image: string;
}

export const CardRestaurant = ({ id, title, image }: Props) => {
  const { push } = useRouter();

  const handleOpenDetail = async () => {
    await push(`/restaurant/${id}`);
  };

  return (
    <CardStyled image={image} onClick={() => handleOpenDetail()}>
      <label>{title}</label>
    </CardStyled>
  );
};

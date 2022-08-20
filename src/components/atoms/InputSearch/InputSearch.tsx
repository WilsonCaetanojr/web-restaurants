import Search from "../../../assets/searchIcon.png";
import Image from "next/image";
import { ContainerIcon, ContainerInput } from "./style";

interface Props {
  placeholder: string;
}

export const InputSearch = ({ placeholder }: Props) => {
  return (
    <>
      <ContainerInput>
        <ContainerIcon>
          <Image src={Search} alt="Icone de Busca" />
        </ContainerIcon>
        <input placeholder={placeholder}></input>
      </ContainerInput>
    </>
  );
};

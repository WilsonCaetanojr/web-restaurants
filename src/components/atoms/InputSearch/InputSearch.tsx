import Search from "../../../assets/searchIcon.png";
import Image from "next/image";
import { ContainerIcon, ContainerInput } from "./style";

interface Props {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const InputSearch = ({ placeholder, value, setValue }: Props) => {
  return (
    <>
      <ContainerInput>
        <ContainerIcon>
          <Image src={Search} alt="Icone de Busca" />
        </ContainerIcon>
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </ContainerInput>
    </>
  );
};

import Image from "next/image";

import { Backdrop, Spinner } from "./style";
import LoadingIcon from "../../../assets/icons/loadingIcon.png";

export const LoadingSpinner = () => {
  return (
    <Backdrop>
      <Spinner src={LoadingIcon} alt="Spinner de carregamento"></Spinner>
    </Backdrop>
  );
};

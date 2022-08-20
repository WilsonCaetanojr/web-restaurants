import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 16px;
`;

export const Logo = styled(Image)`
  min-width: 87px !important;
  max-width: 87px !important;
  min-height: 34px !important;
  max-height: 34px !important;

  cursor: pointer;
`;

export const TextRigth = styled.div`
  display: flex;
  text-align: right;
  flex-direction: column;
  flex-wrap: wrap;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => props.theme.sizes["8"]};
    line-height: 140%;

    text-align: right;

    color: ${(props) => props.theme.colors.darkDown};
  }

  label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes["5"]};
    line-height: 140%;

    text-align: right;

    color: ${(props) => props.theme.colors.darkUp};
  }
`;

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    justify-content: "flex-start";
    margin-top: 40px;
  }
`;

export const Logo = styled(Image)`
  min-width: 87px !important;
  max-width: 87px !important;
  min-height: 34px !important;
  max-height: 34px !important;

  cursor: pointer;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: none !important;
  }
`;

export const TextArea = styled.div`
  display: flex;
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

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    align-items: flex-start;

    h1 {
      font-size: ${(props) => props.theme.sizes["6"]};
      text-align: left;
      margin-bottom: 20px;
      max-width: 250px;
    }

    label {
      text-align: left;
      font-size: ${(props) => props.theme.sizes["4"]};
    }
  }
`;

import styled from "styled-components";
import Image from "next/image";

export const Header = styled.div<{ image: string }>`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  height: 350px;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0;
  top: 0;
  left: 0;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    height: 283px;
  }
`;

export const InputArea = styled.div`
  width: 80%;
  max-width: 540px;
  align-self: center;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
`;

export const BoderBottom = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px -20px 20px 0px rgb(0 0 0 / 15%);
  border-radius: 32px 32px 0px 0px;
  height: 32px;
  width: 100%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0px 100px;
  height: 101px;

  @media (max-width: 750px) {
    padding: 0px 20px;
  }

  @media (max-width: 550px) {
    padding: 0px 0px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }
`;

export const LogoEasyFood = styled(Image)`
  min-width: 87px !important;
  max-width: 87px !important;
  min-height: 34px !important;
  max-height: 34px !important;

  cursor: pointer;
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
    color: ${(props) => props.theme.colors.darkDown};
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    align-items: flex-start;

    h1 {
      font-size: ${(props) => props.theme.sizes["6"]};
      text-align: left;
      margin-bottom: 20px;
    }

    label {
      text-align: left;
      font-size: ${(props) => props.theme.sizes["4"]};
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: ${(props) => props.theme.sizes["4"]};
    }

    label {
      font-size: ${(props) => props.theme.sizes["3"]};
    }
  }
`;

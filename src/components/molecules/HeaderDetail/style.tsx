import Image from "next/image";
import styled from "styled-components";

export const Header = styled.div<{ image: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 187px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  padding: 0;
  top: 0;
  left: 0;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    justify-content: space-between;
  }
`;

export const WrapperDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperContact = styled.div`
  height: 90px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.white};

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => props.theme.sizes["8"]};
    line-height: 140%;
  }

  h6 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 21px;
  }
`;

export const Goback = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  div {
    display: flex;
    width: 55px;
    margin-left: 15%;
    align-items: center;

    label {
      margin-left: 15%;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: ${(props) => props.theme.sizes["3"]};
      line-height: 18px;
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
    }

    img {
      min-width: 6.01px;
      max-width: 6.01px;
      min-height: 10.02px;
      max-height: 10.02px;
      margin-right: 10px;
      cursor: pointer;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-top: 60px;
    }
  }
`;

export const BoderBottom = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px -20px 20px 0px rgb(0 0 0 / 15%);
  border-radius: 32px 32px 0px 0px;
  height: 32px;
  width: 100%;
  margin: 0px;

  display: flex;
  justify-content: center;

  div {
    position: absolute;
    top: 60px;
  }
`;

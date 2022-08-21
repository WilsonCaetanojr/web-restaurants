import styled from "styled-components";

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

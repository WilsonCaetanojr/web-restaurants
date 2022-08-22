import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px 0 16px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 0 30px 0 30px;
  }
`;

export const ContainerCard = styled.div`
  max-width: 100%;
  margin-bottom: 100px;
  display: grid;
  row-gap: ${(props) => props.theme.sizes["5"]};
  column-gap: ${(props) => props.theme.sizes["5"]};
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 350px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TitleStyled = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.sizes["6"]};
  line-height: 140%;
  color: ${(props) => props.theme.colors.darkDown};
`;

export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const WrapperSearchLabel = styled.div`
  margin: 40px 0 30px 0;

  img {
    cursor: pointer;
  }

  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 140%;

    text-align: center;

    color: ${(props) => props.theme.colors.lightDown};
  }

  h2 {
    line-height: 140%;
    text-align: center;
  }
`;

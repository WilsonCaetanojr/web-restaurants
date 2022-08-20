import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px 0 16px;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  gap: ${(props) => props.theme.sizes["4"]};

  justify-content: center;

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

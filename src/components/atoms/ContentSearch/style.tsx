import styled from "styled-components";

export const Container = styled.div`
  margin: 16px 0;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => props.theme.sizes["6"]};
    line-height: 140%;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin: 30px 0px 15px 0px;

    h2 {
      font-size: 0.938rem;
    }
  }
`;

export const SearchTextRight = styled.div`
  width: 180px;
  text-align: right;

  label {
    font-size: ${(props) => props.theme.sizes["3"]};
    color: ${(props) => props.theme.colors.lightDown};
    font-weight: 400;
  }
`;

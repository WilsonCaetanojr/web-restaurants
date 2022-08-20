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
    font-size: 24px;
    line-height: 140%;
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

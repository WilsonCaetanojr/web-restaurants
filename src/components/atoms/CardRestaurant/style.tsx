import styled from "styled-components";

export const CardStyled = styled.div<{ image: string }>`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  height: ${(props) => props.theme.sizes["40"]};

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 8px;

  display: flex;
  align-items: flex-end;

  &:hover {
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 0px 0px 20px 4px #5e5d5db9;
  }

  label {
    padding: 10px;
    font-weight: 700;
    font-size: ${(props) => props.theme.sizes["3"]};
    color: ${(props) => props.theme.colors.white};
  }
`;

import styled from "styled-components";

export const Logo = styled.div<{ logo: string }>`
  width: 119px !important;
  height: 119px !important;

  background: url(${(props) => props.logo}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50% 50%;
  border: ${(props) => props.theme.colors.white} solid 1px !important;
`;

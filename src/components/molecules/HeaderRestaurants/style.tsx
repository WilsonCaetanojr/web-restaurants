import styled from "styled-components";

export const Header = styled.div<{ backgoundImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  height: 350px;
  background: url(${(props) => props.backgoundImage}) no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0;
  top: 0;
  left: 0;
`;

export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
`;

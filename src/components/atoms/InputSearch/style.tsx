import styled from "styled-components";

export const ContainerInput = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 20px;
  border: 1px solid ${(props) => props.theme.colors.lightMedium};
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;

  input {
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    margin-left: 5px;
  }
`;

export const ContainerIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

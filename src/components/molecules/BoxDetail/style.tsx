import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  padding-bottom: 100px;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  text-justify: inter-word;

  h1 {
    text-align: center;
    margin-top: -25px;
  }

  div {
    padding: 0px 16px;
  }

  h6 {
    font-style: normal;
    line-height: 140%;
    margin-top: 20px;
    margin-bottom: 3px;
    color: ${(props) => props.theme.colors.darkDown};
  }

  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes["4"]};
    line-height: 24px;
    color: ${(props) => props.theme.colors.darkUp};
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    div {
      padding: 0px 30px;
    }

    h6 {
      margin-top: 30px;
    }
    h5 {
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`;

export const Description = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 33px;

  color: #676666;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 0.875rem;
    line-height: 21px;
  }
`;

export const Line = styled.hr`
  width: 100%;
  text-align: left;
  margin: 30px 0 30px 0px;

  border: 1px solid ${(props) => props.theme.colors.light};
`;

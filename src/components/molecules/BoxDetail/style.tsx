import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 600px;
  /* display: block; */
  /* box-sizing: border-box; */
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  text-align: justify;
  text-justify: inter-word;

  h6 {
    font-style: normal;
    line-height: 140%;
    margin-top: 20px;
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
`;

export const Description = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 33px;

  color: #676666;
`;

export const Line = styled.hr`
  width: 100%;
  text-align: left;
  margin: 30px 0 30px 0px;

  border: 1px solid ${(props) => props.theme.colors.light};
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    label {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.063rem;
      line-height: 26px;
    }

    span {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 18px;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 21px;

      color: ${() => theme.colors.darkDown};
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.5rem;
    }
    h3 {
        font-size: 1.25rem;
    }
    h4 {
        font-size: 1.063rem;
    }
    h5 {
        font-size: 1rem;
    }
    h6 {
        font-size: 0.938rem;
    }

    *{
        margin: 0;
        padding: 0;
    }
`;

export const theme = {
  colors: {
    primary: "#ED1C24",
    darkDown: "#333333",
    dark: "#666666",
    darkUp: "#808080",
    white: "#ffffff",
    lightDown: "#aaaaaa",
    light: "#cccccc",
    lightMedium: "#E6E6E6",
    lightUp: "#f2f2f2",
  },
  sizes: {
    "0": "0rem",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "40": "10rem",
  },
};

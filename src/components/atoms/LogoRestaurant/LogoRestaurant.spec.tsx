import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../libs/styledComponents";
import { LogoRestaurant } from "./LogoRestaurant";

describe("Logo Restaurant Component", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <LogoRestaurant logo="https://i.imgur.com/RCxijK7.jpeg" />
      </ThemeProvider>
    );

    expect(getByTestId("logo-to-restaurant")).toBeInTheDocument();
  });
});

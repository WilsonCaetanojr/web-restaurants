import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../libs/styledComponents";
import { LoadingSpinner } from "./LoadingSpinner";

describe("Loading Spinner Component", () => {
  it("should render", () => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <LoadingSpinner />
      </ThemeProvider>
    );

    expect(getByAltText("Spinner de carregamento")).toBeInTheDocument();
  });
});

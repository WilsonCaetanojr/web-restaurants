import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../libs/styledComponents";
import { InputSearch } from "./InputSearch";

describe("Input Component", () => {
  it("should render", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <InputSearch
          placeholder="Input example"
          value="init value"
          setValue={() => {}}
        />
      </ThemeProvider>
    );

    expect(getByPlaceholderText("Input example")).toBeInTheDocument();
  });
});

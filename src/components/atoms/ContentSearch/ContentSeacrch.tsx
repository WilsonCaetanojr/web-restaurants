import { theme } from "../../../libs/styledComponents";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { Container, SearchTextRight } from "./style";

export const ContentSearch = ({ searchText }: { searchText: string }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Container>
        <h2>{searchText ? "Resultados" : "Restaurantes"}</h2>

        {!!(searchText && width > parseInt(theme.screens.mobile)) && (
          <SearchTextRight>
            <label>Resultados para</label>
            <h4>
              {`${searchText.substring(0, 16)}${
                searchText.length > 16 ? "..." : ""
              }`}
            </h4>
          </SearchTextRight>
        )}
      </Container>
    </>
  );
};

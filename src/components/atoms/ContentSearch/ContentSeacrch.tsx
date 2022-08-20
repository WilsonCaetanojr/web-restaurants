import { Container, SearchTextRight } from "./style";

export const ContentSearch = ({ searchText }: { searchText: string }) => {
  return (
    <>
      <Container>
        <h2>{searchText ? "Resultados" : "Restaurantes"}</h2>

        {!!searchText && (
          <SearchTextRight>
            <label>Resultados para</label>
            <h4>{searchText}</h4>
          </SearchTextRight>
        )}
      </Container>
    </>
  );
};

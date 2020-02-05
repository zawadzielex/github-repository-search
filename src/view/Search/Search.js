import React, { useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Header from "layout/Header";
import { SearchContainer, SearchInput, SearchProgress } from "./Search.styled";
import SearchResults from "./SearchResults";

function Search({
  getRepositories,
  repositories,
  isLoading,
  isLoaded,
  isError
}) {
  const refInput = useRef(null);

  const handleSearch = e => {
    e.preventDefault();
    refInput.current.value && getRepositories(refInput.current.value);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Container>
        <Grid container>
          <Grid container justify="center" alignItems="center">
            <SearchContainer component="form">
              <SearchInput
                placeholder="Search Github repository"
                inputProps={{ ref: refInput }}
                onChange={handleSearch}
              />
              <IconButton
                type="submit"
                aria-label="search"
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            </SearchContainer>
          </Grid>
          <Grid container justify="center">
            {!isLoading && isLoaded && !isError && (
              <SearchResults repository={repositories} />
            )}
            {isLoading && !isError && <SearchProgress />}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Search;

import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import Header from "../../components/Header";
import TableList from "../../components/TableList";

import { getShowGenres } from "../../utils/api_genres";
import { getShows } from "../../utils/api_shows";

export default function TvShows() {
  const [rows, setRows] = useState([]);
  const [genres, setGenres] = useState([]); // store the full list of genres
  const [genre, setGenre] = useState("all"); // store the selected genre by users
  const [ sort, setSort ] = useState(""); // store the selected sort option by user

  useEffect(() => {
    // retrieve data from API
    getShows(genre, sort).then((data) => {
      // when data is received from the API
      setRows(data);
    });
  }, [genre, sort]);

  useEffect(() => {
    getShowGenres().then((data) => {
      setGenres(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TableList
          type="shows"
          rows={rows} // the list of genres
          genres={genres}
          // the item user selected
          genre={genre}
          setGenre={setGenre}
          sort={sort}
          setSort={setSort}
        />
      </Container>
    </>
  );
}

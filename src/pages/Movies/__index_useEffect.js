import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import Header from "../../components/Header";
import TableList from "../../components/TableList";

import { getMovies } from "../../utils/api";
import { getGenres } from "../../utils/api_genres";

export default function Movies() {
  const [rows, setRows] = useState([]);
  const [genres, setGenres] = useState([]); // store the full list of genres
  const [genre, setGenre] = useState("all"); // store the selected genre by user
  const [sort, setSort] = useState("");// store the selected store options
  useEffect(() => {
    // retrieve data from API
    getMovies(genre, sort).then((data) => {
      // when data is received from the API
      setRows(data);
    });
  }, [genre, sort]);

  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data);
    });
  }, []);

  /*
    useEffect Conditions
    [] -> trigger once when page load
    [ genre ] -> trigger when genre value changes
  */

  return (
    <>
      <Header />
      <Container>
        <TableList
          type="movies"
          rows={rows}
          // the list of genres
          genres={genres}
          // the item user selected
          genre={genre}
          setGenre={setGenre}
          sort = {sort}
          setSort = {setSort}
        />
      </Container>
    </>
  );
}

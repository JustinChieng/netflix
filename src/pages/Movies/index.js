import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';

import { Container } from "@mui/material";
import Header from "../../components/Header";
import TableList from "../../components/TableList";

import { getMovies } from "../../utils/api";
import { getGenres } from "../../utils/api_genres";

export default function Movies() {

  const [genre, setGenre] = useState("all"); // store the selected genre by users
  const [ sort, setSort ] = useState("");  // store the selected sort option by user

  // retrieve the movie list using the getMovies function, which get the data from backend api
  const { data: rows } = useQuery({ queryKey: ['movies', genre, sort], queryFn: () => getMovies(genre, sort) })


  //retrieve the genres list from the getGenres function, which get data from the backend api
  const { data: genres } = useQuery({ queryKey: ['genres'], queryFn: getGenres })
  

  return (
    <>
      <Header />
      <Container>
        <TableList
          type="movies"
          rows={rows}
          // the list of genres
          genres = {genres}
        //   genres={genres}
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

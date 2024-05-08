import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Container } from "@mui/material";
import Header from "../../components/Header";
import TableList from "../../components/TableList";

import { getShowGenres } from "../../utils/api_genres";
import { getShows } from "../../utils/api_shows";

export default function TvShows() {

  const [genre, setGenre] = useState("all"); // store the selected genre by users
  const [ sort, setSort ] = useState(""); // store the selected sort option by user

 // retrieve the movie list using the getMovies function, which get the data from backend api
 const { data: rows } = useQuery({ queryKey: ['tvShows',genre,sort], queryFn: () => getShows(genre,sort) });

 // retrieve the genres list using the getGenres function, which get the data from backend api
 const { data: show_genres } = useQuery({ queryKey: ['genres'], queryFn: getShowGenres })


  return (
    <>
      <Header />
      <Container>
        <TableList
          type="shows"
          rows={rows} // the list of genres
          genres={show_genres}
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

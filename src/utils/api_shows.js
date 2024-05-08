import axios from "axios";

const API_URL =
"http://localhost:5000";

export const getShows = async (genre, sort) => {
  // axios method
  try {
    /* 
      Our goal is to go to this url to get the filtered data
      http://localhost:5000/movies?genre=Comedy&sort=title
    */
    // URL SEARCH PARAMS method
    let params = {};
    if (genre !== "all") {
      params.genre = genre;
    }
    if ( sort !== '' ) {
      params.sort = sort;
    }
    const queries = new URLSearchParams(params);
    const response = await axios.get(API_URL + "/tvshows?" + queries.toString());
    return response.data;
    /* Manual build string query method */
    // const response = await axios.get(
    //   API_URL +
    //     "/movies?" +
    //     (genre !== "all" ? "genre=" + genre : "") +
    //     (genre && rating ? "&" : "") +
    //     (rating ? "rating=" + rating : "")
    // );
    // return response.data;
  } catch (error) {
    console.log("error", error);
  }
  // fetch method
  //   try {
  //     // const response = fetch("http://localhost:5000/movies");
  //     const response = await fetch(
  //       "https://opulent-space-acorn-4g59j7q5qw2j4x6-5000.app.github.dev/movies"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
};

export const getShow = async (id) => {};

export const addShow = async (data) => {};

export const updateShow = async (id, data) => {};

export const deleteShow = async (id) => {};

import axios from "axios";

const API_URL = "http://localhost:5000";

export const getGenres = async () => {
    try {
        const response = await axios.get(API_URL + "/genres");
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getShowGenres = async () => {
    try {
      const response = await axios.get(API_URL + "/genres?type=show");
      return response.data;

    } catch (error) {

    }
  }
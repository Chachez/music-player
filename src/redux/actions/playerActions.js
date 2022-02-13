import { tracks } from "../actionTypes";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com",
  },
};

export const searchTerm = (data) => async (dispatch) => {
  return await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${data}`
    )
    .then((res) =>
      dispatch({
        type: tracks.SEARCHED_TERM,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

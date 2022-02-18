import { tracks } from "../actionTypes";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const searchTerm = (data) => async (dispatch) => {
  return await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/?q=${data}`,
      config
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

export const getCharts = () => async (dispatch) => {
  return await axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0`)
    .then((res) =>
      dispatch({
        type: tracks.TOP_CHARTS,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const searchParameters = (data) => async (dispatch) => {
  return dispatch({
    type: tracks.SEARCH_PARAMETER,
    payload: data,
  });
};

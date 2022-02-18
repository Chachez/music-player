import { tracks } from "../actionTypes";
import axios from "axios";

export const searchTerm = (data) => async (dispatch) => {
  dispatch({
    type: tracks.SEARCHING,
  });
  return await axios
    .get(
      `https://api.allorigins.win/raw?url=https://api.deezer.com/search/?q=${data}`
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
    .get("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0")
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

export const artistDetails = (data) => async (dispatch) => {
  dispatch({
    type: tracks.GETTNG_ARTIST_DETAILS,
  });
  return await axios
    .get(
      `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${data}`
    )
    .then((res) =>
      dispatch({
        type: tracks.ARTIST_DETAILS,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const artistTopTracks = (data) => async (dispatch) => {
  dispatch({
    type: tracks.GETTING_ARTIST_TOP_TRACKS,
  });
  return await axios
    .get(
      `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${data}/top?limit=5`
    )
    .then((res) =>
      dispatch({
        type: tracks.ARTIST_TOP_TRACKS,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

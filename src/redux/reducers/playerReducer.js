import { tracks } from "../actionTypes";

const initialState = {
  searchedData: [],
  topCharts: [],
  searchParams: "",
  artistDetails: [],
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case tracks.SEARCHED_TERM:
      return {
        ...state,
        searchedData: action.payload,
      };

    case tracks.TOP_CHARTS:
      return {
        ...state,
        topCharts: action.payload,
      };

    case tracks.SEARCH_PARAMETER:
      return {
        ...state,
        searchParams: action.payload,
      };

    case tracks.ARTIST_DETAILS:
      return {
        ...state,
        artistDetails: action.payload,
      };
    default:
      return state;
  }
};

export default PlayerReducer;

import { tracks } from "../actionTypes";

const initialState = {
  searchedData: [],
  topCharts: [],
  searchParams: "",
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
    default:
      return state;
  }
};

export default PlayerReducer;

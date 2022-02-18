import { tracks } from "../actionTypes";

const initialState = {
  searchedData: [],
  topCharts: [],
  searchParams: "",
  artistDetails: [],
  artistTopTracks: [],
  loading: false,
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case tracks.SEARCHING:
      return {
        ...state,
        loading: true,
      };
    case tracks.SEARCHED_TERM:
      return {
        ...state,
        searchedData: action.payload,
        loading: false,
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

    case tracks.GETTNG_ARTIST_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case tracks.ARTIST_DETAILS:
      return {
        ...state,
        artistDetails: action.payload,
        loading: false,
      };

    case tracks.GETTING_ARTIST_TOP_TRACKS:
      return {
        ...state,
        loading: true,
      };

    case tracks.ARTIST_TOP_TRACKS:
      return {
        ...state,
        artistTopTracks: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default PlayerReducer;

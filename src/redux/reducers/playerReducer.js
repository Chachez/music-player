import { tracks } from "../actionTypes";

const initialState = {
  searchedData: [],
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case tracks.SEARCHED_TERM:
      return {
        ...state,
        searchedData: action.payload,
      };
    default:
      return state;
  }
};

export default PlayerReducer;

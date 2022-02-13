import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import PlayerReducer from "./reducers/playerReducer";

const rootReducer = combineReducers({
  key: "root",
  storage: storage,
  playerReducer: PlayerReducer,
});

export default rootReducer;

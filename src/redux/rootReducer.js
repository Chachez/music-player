import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  key: "root",
  storage: storage,
});

export default rootReducer;

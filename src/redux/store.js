import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./rootReducer";

//Persisting State on Refresh
function saveTolocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {}
}

function loadFromlocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

// Middleware wraps store's dispatch method.
const middleware = [thunk];

const persistedState = loadFromlocalStorage();

//Pass the root Reducer
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => saveTolocalStorage(store.getState()));

export default store;

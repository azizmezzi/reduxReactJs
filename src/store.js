import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import roorReducer from "./reducers";

if (localStorage.getItem("transactions") == null)
  localStorage.setItem("transactions", JSON.stringify([]));
const initialState = {
  item: {},
  items: JSON.parse(localStorage.getItem("transactions")),
};

const middleware = [thunk];

const store = createStore(
  roorReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

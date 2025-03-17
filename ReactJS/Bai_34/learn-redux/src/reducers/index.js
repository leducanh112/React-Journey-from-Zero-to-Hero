import counterReducer from "./counter";
import { combineReducers } from "redux";
import todosReducer from "./todos";

const allReducer = combineReducers({
  counterReducer,
  todosReducer,
});

export default allReducer;

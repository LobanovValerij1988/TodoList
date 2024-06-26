import { combineReducers } from "redux";
import todosReducer from "./features/todos/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;

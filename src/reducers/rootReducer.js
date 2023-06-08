import { combineReducers } from "redux";
import reducerAllPost from "./reducerAllPost";
import selectedPostReducer from "./reducerSelectedPost";

const rootReducer = combineReducers({
  allPost: reducerAllPost,
  selectedPost: selectedPostReducer,
});

export default rootReducer;

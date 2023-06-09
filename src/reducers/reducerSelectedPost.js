import { SELECT_POST } from "../actions/Types";

export default function postReducer(state = null, action) {
  switch (action.type) {
    case SELECT_POST:
      return action.payload;
    default:
      return state;
  }
}

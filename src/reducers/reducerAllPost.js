import { FETCH_BUTTON_CLICK } from "../actions/Types";

export default function postReducer(state = null, action) {
  switch (action.type) {
    case FETCH_BUTTON_CLICK:
      return action.payload;
    default:
      return state;
  }
}

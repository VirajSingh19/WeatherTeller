import { combineReducers } from "redux";
import { FETCH_DATA } from "../actions";

function result(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    default:
      return state;
  }
}



export default combineReducers({
  result
});

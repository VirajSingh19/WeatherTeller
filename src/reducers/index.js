import { combineReducers } from "redux";
import { SEARCH } from "../actions";

function result(state = [], action) {
  switch (action.type) {
    case SEARCH:
      return [];
    default:
      return state;
  }
}

const rootReducer = combineReducers({result});

export default rootReducer;

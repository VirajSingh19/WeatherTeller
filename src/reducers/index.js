import { combineReducers } from "redux";
import { FETCH_DATA, START_LOADING } from "../actions";

function result(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.data.list;
    default:
      return state;
  }
}

function loading(state=false, action) {
  switch (action.type) {
    case START_LOADING: // when search button is clicked loading is set to true
      return true;
    case FETCH_DATA: // when data is fetched loading is set to false
      return false;
    default:
      return state;
  }
}



export default combineReducers({
  result,
  loading
});

import { combineReducers } from "redux";
import { FETCH_DATA, START_LOADING, CLEAR_RECENT } from "../actions";
import _ from "lodash";
function result(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case START_LOADING: // when search button is clicked loading is set to true
      return true;
    case FETCH_DATA: // when data is fetched loading is set to false
      return false;
    default:
      return state;
  }
}

function recent(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      const data = action.data.list[0];
      console.log("recent data is", data);
      if (_.isNil(data)) return state;
      if (
        state.find(item => {
          return item.id === data.id;
        })
      ) {
        //already added in recent list
        return state;
      }
      state.unshift(data);
      if (state.length > 3) state.pop(); // deleting data older than 3 recent searches
      localStorage.setItem("recent", JSON.stringify(state));
      return [...state];
    case CLEAR_RECENT:
      localStorage.removeItem("recent");
      return [];
    default:
      if (localStorage.getItem("recent")) {
        state = JSON.parse(localStorage.getItem("recent"));
      }
      return state; //building store from recent data saved in local storage
  }
}

export default combineReducers({
  result,
  loading,
  recent,
});

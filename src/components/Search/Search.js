import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search pa2 br4">
        <input
          className="inp shadow-5 w-60"
          placeholder="city or zipcode"
          type="search"
        />

        <button className="btn ml2 shadow-5 pa2 grow">Search</button>
      </div>
    );
  }
}

export default Search;

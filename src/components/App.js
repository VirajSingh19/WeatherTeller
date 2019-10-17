import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Nav from "./Nav/Nav";
import Search from "./Search/Search";
import CardList from "./CardList/CardList";
import RecentList from "./RecentList/RecentList";
import {clearRecent} from "../actions";
class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
        <CardList />
        <div className="main">
          <span
            className="pa2 f5"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "lightblue",
              background: "black",
            }}
          >
            Past Searches:
            <p onClick={()=>this.props.clearRecent()} className="f5 grow">Clear </p>
          </span>
          <RecentList />
        </div>
      </div>
    );
  }
}

export default connect(null,{clearRecent})(App);

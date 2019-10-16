import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Search from "./Search/Search";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;

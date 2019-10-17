import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Search from "./Search/Search";
import CardList from "./CardList/CardList";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <Search />
        <CardList/>
      </div>
    );
  }
}


export default App;
import React from "react";
import "./Search.css";
import { connect } from "react-redux";
import {fetchQuery} from "../../actions";

class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      query: ""
    }
  }

  setQuery(query) {
    this.setState({query});
  }

  search() {
    const search = this.state.query;
    console.log(search);
    if(search==='')
      alert('Search cannot be empty');
    else
      this.props.fetchQuery();
  }

  render() {

    console.log('search props are', this.props);
  
    return (
     <div className="search pa2 br4">
        <input
          className="inp shadow-5 w-60"
          placeholder="city or zipcode"
          type="search"
          onChange={(event)=>this.setQuery(event.target.value)}
        />

        <button onClick={()=>this.search()} className="btn ml2 shadow-5 pa2 grow">Search</button>
      </div>
    );
  }
}

export default connect(null, {fetchQuery}) (Search);

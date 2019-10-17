import React from "react";
import "./Search.css";
import { connect } from "react-redux";
import _ from 'lodash';
import {ToastsContainer, ToastsStore} from 'react-toasts';

import {fetchQuery, startLoading} from "../../actions";
import Loader from "./Loader/Loader";

class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      query: '',
    }
  }

  // componentDidMount() {
  //   if(this.props.result.list && _.isEmpty(this.props.result.list))
  //     ToastsStore.warning("No Result")
  //     else
  //      return;
  // }

  setQuery(query) {
    this.setState({query});
  }

  async search() {
    const search = this.state.query;
    console.log(search);
    if(search==='') {
      ToastsStore.info("Search cannot be empty!");
    }
    else{
      await this.props.startLoading();
      this.props.fetchQuery(search);
    }
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }
  
  render() {
    return (
     <div>
      <div className="container pa2 br4">
          <input
            className="inp shadow-5 w-60"
            placeholder="city or zipcode"
            type="search"
            onChange={(event)=>this.setQuery(event.target.value)}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
          />

          <button onClick={()=>this.search()} className="btn ml2 shadow-5 pa2 grow">Search</button>
          </div>
          
          {
          this.props.loading ? 
          <div className='loaderContainer'>
            <Loader />
          </div>
          : 
          <div className='loaderContainer pa2'>
          </div>
          }
          <ToastsContainer store={ToastsStore}/>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    result: state.result,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchQuery, startLoading}) (Search);

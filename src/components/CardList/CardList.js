import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import { connect } from "react-redux";

class Nav extends React.Component {
  render() {
    console.log('cardlist props',this.props);
    return (
      <div className="cList">
        <Card />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.result,
    // loading: state.loading,
  };
}

export default connect(
  mapStateToProps,
  null
)(Nav);

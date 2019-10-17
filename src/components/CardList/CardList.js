import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import { connect } from "react-redux";
import _ from "lodash";
class Nav extends React.Component {
  render() {
    console.log("cardlist props", this.props);
    return (
      <div className="cList">
        {
          !_.isNil(this.props.result.list) &&
          this.props.result.list.map((item, index) => {
            return <Card key={index} value={item} />;
          })
        }
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

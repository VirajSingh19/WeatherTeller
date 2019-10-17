import React from "react";
import _ from "lodash";
import "./RecentList.css";
import Card from "../Card/Card";
import { connect } from "react-redux";

class Nav extends React.Component {
  render() {
    console.log("recent props", this.props);
    return (
      <div className="rList">
        {!_.isNil(this.props.recent) &&
          this.props.recent.map((item, index) => {
            return <Card key={index} value={item} />;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recent: state.recent,
  };
}

export default connect(
  mapStateToProps,
  null
)(Nav);

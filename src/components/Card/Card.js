import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card pa1 br3">
        <span className="name f5">
          'Name', <i className="f5"> 'sys.country' </i>
          <img
            className="ml2 mr2"
            src="http://openweathermap.org/images/flags/au.png"
            alt="country"
          />
          <span className="badge f7 mr2">30 °С</span>
          'Haze'
        </span>
        <span className="detail f6">
          <span className="minmax br4">
            <span className="f6">
              Max temp: <span className="badge f7">30 °С</span>{" "}
            </span>
            <span className="f6">
              Min temp : <span className="badge f7">30 °С</span>{" "}
            </span>
          </span>
          <br />

          <span className="minmax br4">
            <span className="f6"> Wind: 1.5 m/s </span>
            <span className="f6"> Geo 'coord' [lat,lon] </span>
          </span>
        </span>
      </div>
    );
  }
}

export default Card;

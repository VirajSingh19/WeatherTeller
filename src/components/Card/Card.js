import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    const { name, main, wind, sys, clouds } = this.props.value;
    // kelvin to celcius
    main.temp_max = (main.temp_max - 273.15).toFixed(1);
    main.temp = (main.temp - 273.15).toFixed(1);

    const weather = this.props.value.weather[0];
    return (
      <div className="card pa1 br3">
        <span className="name f6">
          {name}, {sys.country}
          <img
            className="ml2 mr2"
            src={`http://openweathermap.org/images/flags/${sys.country.toLowerCase()}.png`}
            alt="country"
          />
          <span style={{ color: "lightblue" }} className="badge f7 mr2">
            {main.temp} °С
          </span>
          {weather.main}
        </span>
        <span className="detail f6">
          <span className="minmax br4">
            <span className="f6">
              Max temp: <span className="badge f7">{main.temp_max} °С</span>{" "}
            </span>
            <span className="f6">Clouds : {clouds.all}%</span>
          </span>
          <br />

          <span className="minmax br4">
            <span className="f6"> Wind: {wind.speed} m/s </span>
            <span className="f6"> Humidity : {main.humidity} </span>
          </span>
        </span>
      </div>
    );
  }
}

export default Card;

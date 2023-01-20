import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        <div>Max Temperature: {temperature.max}&deg;C</div>
        <div>Min Temperature: {temperature.min}&deg;C</div>
      </div>
      <div className="forecast-details__humidity">humidity: {humidity}&#37;</div>
      <div className="forecast-details__wind">wind: {wind.speed}mph {wind.direction}</div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;

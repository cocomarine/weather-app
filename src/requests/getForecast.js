import React from "react";
// import axios from "axios";
const axios = require("../../node_modules/axios/dist/node/axios.cjs");

const getForecast = (setSelectedDate, setLocation, setForecasts) => {
  const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setLocation(response.data.location);
    setForecasts(response.data.forecasts);
  });
};

export default getForecast;

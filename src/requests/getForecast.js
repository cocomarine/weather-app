import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setLocation,
  setForecasts
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setLocation(response.data.location);
    setForecasts(response.data.forecasts);
  });
};

export default getForecast;

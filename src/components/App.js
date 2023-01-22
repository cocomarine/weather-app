import React, { useEffect, useState } from "react";
import "../styles/App.css";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = () => {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => setSelectedDate(date);

  const getForecast = () => {
    const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setLocation(response.data.location);
      setForecasts(response.data.forecasts);
    });
  };

  useEffect(() => {
    getForecast();
  });

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;

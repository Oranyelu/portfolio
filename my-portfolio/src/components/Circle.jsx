import React from 'react';

const WeatherDisplay = ({ location, temperature, unit, time }) => {
  return (
    <div className="weather-container">
      <div className="location">{location}</div>
      <div className="temperature">
        {temperature}° <span className="unit">{unit}</span>
      </div>
      <div className="time">{time}</div>
    </div>
  );
};

export default WeatherDisplay;

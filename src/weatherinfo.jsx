function WeatherInfo({ weather }) {
  if (!weather) {
    return <p>No weather data yet</p>;
  }
return(

<div className="weather-card">
<h2>{weather.city}</h2>
 <p>🌡️ Temperature: {weather.temp}°C</p>
      <p>☁️ Condition: {weather.condition}</p>


</div>

)
}
export default WeatherInfo;
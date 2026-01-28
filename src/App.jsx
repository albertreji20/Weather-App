import { useState } from "react";
import "./App.css";
import SearchBar from "./searchbar";
import WeatherInfo from "./weatherinfo";

function App() {
  // 1️⃣ State lives in the parent
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // 2️⃣ Logic lives in the parent
  function handleSearch() {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    // Fake data for now (API later)
    setWeather({
      city: thrissur,
      temp: 28,
      condition: "Sunny",
    });
  }

  // 3️⃣ Parent controls what is shown
  return (
    <div className="app">
      <div className="container">
        <h1>🌦️ Weather App</h1>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />

        <WeatherInfo weather={weather} />
      </div>
    </div>
  );
}

export default App;

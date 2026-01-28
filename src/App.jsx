import { useState } from "react";
import SearchBar from "./searchbar";
import "./App.css";


function App() {
  const [city, setCity] = useState("");

  function handleSearch() {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    console.log("Searching weather for:", city);
  }

  return (
    <div>
      <h1>🌦️ Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;

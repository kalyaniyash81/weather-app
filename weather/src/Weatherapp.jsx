import { useState } from "react";
import Searchbox from "./Searchbox";
import Infobox from "./infobox";

export default function Weatherapp() {
  // Default weather information
  let [weatherinfo, setweatherinfo] = useState({
    city: "Delhi",
    country: "IN",
    deg: 40,
    feels_like: 26.05,
    gust: undefined,
    humidity: 94,
    lat: 28.6667,
    lon: 77.2167,
    pressure: 1003,
    sea_level: 1003,
    speed: 4.12,
    sunrise: 1726101286, // Unix timestamp
    sunset: 1726146018,  // Unix timestamp
    temp: 26.05,
    temp_max: 26.05,
    temp_min: 26.05,
    weather: "drizzle",
  });

  // Function to update weather information from Searchbox
  let updateinfo = (newinfo) => {
    setweatherinfo(newinfo);
  };

  // Convert Unix timestamp to human-readable time
  const formatTime = (unixTimestamp) => {
    let date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    return date.toLocaleTimeString(); // Format as time
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Delta</h1>
      <Searchbox updateinfo={updateinfo} />
      <Infobox info={{
        ...weatherinfo, 
        sunrise: formatTime(weatherinfo.sunrise),
        sunset: formatTime(weatherinfo.sunset)
      }} />
    </div>
  );
}

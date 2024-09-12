import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css";
import { useState } from "react";

export default function Searchbox({ updateinfo }) {

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5c62fe483bbe4d29da922e0c12ae196e";

  let getweatherinfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonresponse = await response.json();
      console.log(jsonresponse);

      if (jsonresponse.cod !== 200) {
        throw new Error(jsonresponse.message);
      }

      let result = {
        city: city,
        temp: jsonresponse.main.temp,
        temp_max: jsonresponse.main.temp_max,
        temp_min: jsonresponse.main.temp_min,
        sea_level: jsonresponse.main.sea_level,
        pressure: jsonresponse.main.pressure,
        humidity: jsonresponse.main.humidity,
        feels_like: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
        lat: jsonresponse.coord.lat,
        lon: jsonresponse.coord.lon,
        deg: jsonresponse.wind.deg,
        gust: jsonresponse.wind.gust,
        speed: jsonresponse.wind.speed,
        country: jsonresponse.sys.country,
        sunrise: jsonresponse.sys.sunrise,
        sunset: jsonresponse.sys.sunset,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  let [city, Setcity] = useState("");
  let [err, seterr] = useState(false);

  let handlechange = (evt) => {
    Setcity(evt.target.value);
    seterr(false); // Reset error on input change
  };

  let handlesubmit = async (evt) => {
    evt.preventDefault();
    try {
      let newinfo = await getweatherinfo();
      updateinfo(newinfo); // Corrected from info to newinfo
      Setcity(""); // Clear input after successful fetch
    } catch (error) {
      console.log(error.message);
      seterr(true); // Set error state if fetch fails
    }
  };

  return (
    <div className="Searchbox">
      <form onSubmit={handlesubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Send
        </Button>
        {err && <p style={{ color: "red" }}>No such place exists or an error occurred</p>}
      </form>
    </div>
  );
}

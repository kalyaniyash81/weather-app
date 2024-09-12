import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./infobox.css";

export default function Infobox({ info }) {
  // URLs for different weather images
  const init_url =
    "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hot_url =
    "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=1024x1024&w=is&k=20&c=k7zrlCGWEjywYTLUrKk5nnRKPoy49aHRv2KzBDsbJxw=";
  const rain_url =
    "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold_url =
    "https://images.unsplash.com/photo-1668418321923-becc3ef20077?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Determine image based on weather conditions
  let weatherImage = init_url;
  if (info) {
    weatherImage = info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url;
  }

  // Render weather information if available, otherwise show a placeholder
  return (
    <div className="infobox">
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={weatherImage}
            title={info ? `Weather in ${info.city}` : "Weather Information"}
          />
          <CardContent>
            {info ? (
              <>
                <Typography gutterBottom variant="h5" component="div">
                  {info.city}, {info.country}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <div>Temperature: {info.temp}&deg;C</div>
              <div>Max Temp: {info.temp_max}&deg;C</div>
              <div>Min Temp: {info.temp_min}&deg;C</div>
              <div>Feels Like: {info.feels_like}&deg;C</div>
              <div>Humidity: {info.humidity}%</div>
              <div>Pressure: {info.pressure} hPa</div>
              <div>Sea Level: {info.sea_level ? info.sea_level + ' m' : 'N/A'}</div>
              <div>Weather: {info.weather}</div>
              <div>Wind Speed: {info.speed} m/s</div>
              <div>Wind Direction: {info.deg}&deg;</div>
              <div>Wind Gust: {info.gust ? info.gust + ' m/s' : 'N/A'}</div>
              <div>Latitude: {info.lat}</div>
              <div>Longitude: {info.lon}</div>
              <div>Sunrise: {info.sunrise}</div>
              <div>Sunset: {info.sunset}</div>
                  
                </Typography>
              </>
            ) : (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                No weather information available. Please try again.
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

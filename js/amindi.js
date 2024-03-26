
"use strict";
document.addEventListener("DOMContentLoaded", function() {
 
  const apiKey = "cc55d020036986086d995a8d409eac92";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Georgia&appid=" + apiKey;

  // Fetch weather data
  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.json();
      })
      .then(data => {
        
          displayWeather(data);
      })
      .catch(error => {
          console.error("There was a problem fetching the weather data:", error);
      });

  function displayWeather(data) {
      const weatherInfoDiv = document.getElementById("weather-info");
      const temperature = Math.round(data.main.temp - 273.15); 
      const weatherHtml = `
          <p>Temperature: ${temperature}°C</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      weatherInfoDiv.innerHTML = weatherHtml;
  }
});

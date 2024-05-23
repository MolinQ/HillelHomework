const weatherList = document.querySelector("#weather-info");
const updateButton = document.querySelector("#update-button");
const day = new Date();
const today = day.toLocaleDateString();

function getWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=48.45&lon=34.98&appid=5347287749e53fe06e4a0fc4905a0d3a"
  )
    .then((res) => res.json())
    .then((data) => {
      const weatherInfo = data;
      console.log(weatherInfo);
      weatherList.innerHTML = `
      <p>Town: ${weatherInfo.name}</p>
      <p>Date: ${today}</p>
      <p>Temperature: ${Math.ceil(weatherInfo.main.temp - 273.15)}°C</p>
      <p>Description: ${weatherInfo.weather[0].description}</p>
      <p>Humidity: ${weatherInfo.main.humidity}%</p>
      <p>Pressure: ${weatherInfo.main.pressure} Pa</p>
      <p>Wind: ${weatherInfo.wind.speed} m/s</p>
      `;
    })
    .catch((error) => console.log("Error", error));
}

getWeather();

updateButton.addEventListener("click", getWeather);

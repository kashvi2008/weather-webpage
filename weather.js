const API_KEY = "yourapi";
async function getWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod != 200) {
            alert("City not found!");
            return;
        }
        document.getElementById("city").textContent = data.name;

        document.getElementById("region").textContent =
            data.sys.country;

        document.getElementById("temp").textContent =
            `${Math.round(data.main.temp)}°C`;

        document.getElementById("condition-text").textContent =
            data.weather[0].description;

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.getElementById("feels-like").textContent =
            `${Math.round(data.main.feels_like)}°C`;

        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;

        document.getElementById("wind").textContent =
            `${data.wind.speed} m/s`;

        document.getElementById("visibility").textContent =
            `${data.visibility / 1000} km`;

        document.getElementById("pressure").textContent =
            `${data.main.pressure} hPa`;

        document.getElementById("heat-index").textContent =
            `${Math.round(data.main.feels_like)}°C`;

    } catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }
}
function searchWeather() {
    const city = document.getElementById("cityInput").value;

    if (city.trim() !== "") {
        getWeather(city);
    }
}
getWeather();

async function searchWeather() {
    try{
    let city = document.getElementById("type-loc").value
    if (city === "") {
        alert("Please enter a city name")
        return
    }

    let apiKey = "60078606b8f6eef9021d6b5811a0451c"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    let x = await fetch(url);
    let info = await x.json();

    let celsius = info.main.temp - 273.15
    let feelsLikeCelsius = info.main.feels_like - 273.15

    document.getElementById("city-name").innerHTML = "City: " + info.name
    document.getElementById("temp").innerHTML = "Temperature: " + celsius + "°C"
    document.getElementById("feels-like").innerHTML = "Feels Like: " + feelsLikeCelsius + "°C"
    document.getElementById("condition").innerHTML = "Condition: " + info.weather[0].description
    document.getElementById("humidity").innerHTML = "Humidity: " + info.main.humidity + "%"
    document.getElementById("pressure").innerHTML = "Pressure: " + info.main.pressure + " hPa"
    document.getElementById("wind-speed").innerHTML = "Wind Speed: " + info.wind.speed + " m/s"
    } catch(error){
        alert("City not found. Please check the spelling and try again.")
        console.log(error)
    }
}

document.getElementById("search-btn").addEventListener("click", searchWeather)

document.getElementById("type-loc").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchWeather()
    }
})

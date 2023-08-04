var btn = document.querySelector("#btn");
var text = document.querySelector("#text")
var displaytext1 = document.querySelector("#displaytext1");
var displaytext2 = document.querySelector("#displaytext2");
var displaytext3 = document.querySelector("#displaytext3");
var displaytext4 = document.querySelector("#displaytext4");
var changeimg = document.querySelector("#changeimg");
btn.addEventListener("click", () => {
    findWeather(text.value);
    text.value = '';
});

async function findWeather(city) {

    const api_key = "9245fc9e037b8f54c6816853fd0439db";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const data_weather = await fetch(`${url}`).then(data =>
        data.json());

    if (data_weather.cod === `404`) {
        //console.log("error");
        displaytext1.innerHTML = "Sorry Location not found...."
        changeimg.setAttribute("src", "404.jpeg");


    }

    else {

        console.log(data_weather);

        displaytext1.innerHTML = `${Math.round(data_weather.main.temp - 273.15)}°C Temp`;
        displaytext2.innerHTML = `${data_weather.weather[0].description}`;
        displaytext3.innerHTML = `${data_weather.main.humidity}% Humidity`;
        displaytext4.innerHTML = `${data_weather.wind.speed}Km/h Wind Speed`;


        switch (data_weather.weather[0].main) {

            case 'Clouds':
                changeimg.src = "cloud.jpeg";
                break;
            case 'Clear':
                changeimg.src = "clear.jpeg";
                break;
            case 'Rain':
                changeimg.src = "rain.jpg";
                break;
            case 'Mist':
                changeimg.src = "mist.jpeg";
                break;
            case 'Snow':
                changeimg.src = "snow.jpg";
                break;

        }

    }
}
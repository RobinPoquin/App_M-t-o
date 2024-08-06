let cityName = document.querySelector(".container .search-box input");
let weather_img = document.querySelector(".container .weather-img img");
let weatherMain = document.querySelector(".container .weather_main_1");
let weatherDescrip = document.querySelector(".container .weather-descrip");
let temp = document.querySelector(".container .temp");
let otherDetails = document.querySelector(".container .other-details");
let searchButton = document.querySelector(".container .search-button");
let weatherLocation = document.querySelector(".container .weather-location");


let apiKey = '151d2693004c9f13f4ce4201db154458';

let getWeatherDetails =() =>{
    let city = cityName.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then((res) => res.json()).then((data)=>{
        //console.log(data);
        weather_img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherMain.innerHTML = data.weather[0].main;
        weatherDescrip.innerHTML = data.weather[0].description;
        weatherLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;
        temp.innerHTML = `${data.main.temp}&#176;C`;
        otherDetails.innerHTML = `
                <div>
                    <span>Ressenti</span>
                    <p>${data.main.feels_like} &#176;C</p>
                </div>
                <div>
                    <span>Temp Min</span>
                    <p>${data.main.temp_min} &#176;C</p>
                </div>
                <div>
                    <span>Humidité</span>
                    <p>${data.main.humidity} %</p>
                </div>
                <div>
                    <span>Vitesse du Vent</span>
                    <p>${data.wind.speed} Km/h</p>
                </div>
                <div>
                    <span>Temp Max</span>
                    <p>${data.main.temp_max} &#176;C</p>
                </div>
                <div>
                    <span>Pression</span>
                    <p>${data.main.pressure} mbar</p>
                </div>
            `;
    })
}

searchButton.addEventListener("click",() =>{
    if (cityName.value != "") {
        getWeatherDetails();
    }
})

getWeatherDetails();
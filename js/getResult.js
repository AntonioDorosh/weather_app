import {dataBuilder} from "./dateBuilder.js";

const getData = () => {
    const now = new Date();
    const date = document.querySelector('.location .date');
    date.innerHTML = dataBuilder(now)
}

const getCity = (weather) => {
    const city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`
}

const getTemperature = (weather) => {
    const temperature = document.querySelector('.current .temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`
}

const getWeatherDescription = (weather) => {
    const weather_main = document.querySelector('.current .weather');
    weather_main.innerHTML = `${weather.weather[0].main}`
}

const getAverageTemp = (weather) => {
    const lowHigh = document.querySelector('.current .hi-low');
    lowHigh.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
}

export const getResult = (weather) => {
    getData()
    getCity(weather)
    getTemperature(weather)
    getWeatherDescription(weather)
    getAverageTemp(weather)
}
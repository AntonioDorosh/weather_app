import {dateBuilder} from "./dateBuilder.js";

export const displayResult = async (weather) => {
    const city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    const now = new Date();
    const date = document.querySelector('.location .date');
    date.innerHTML = dateBuilder(now)

    const temperature = document.querySelector('.current .temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

    const weather_el = document.querySelector('.current .weather');
    weather_el.innerHTML = weather.weather[0].main;

    let hi_low = document.querySelector(".hi-low");
    hi_low.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
        weather.main.temp_max
    )}°c`;
}
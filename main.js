const api = {
    key: '70c0aeb3ac6d25d9c4ddb0aa5add34aa',
    base: 'https://api.openweathermap.org/data/2.5/'
};

const searchInput = document.querySelector('.search-box');

const getData = async (query) => {
    try {
        const data = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
        const weather = await data.json();
        await displayResult(weather)
    } catch (e) {
        console.log(e)
    }
}

const setQuery = async (event) => {
    if (event.keyCode === 13) {
        await getData(searchInput.value)
    }
};

const displayResult = async (weather) => {
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


const dateBuilder = (d) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

searchInput.addEventListener('keypress', setQuery)


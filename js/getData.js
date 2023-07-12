import {api} from "./api/api.js";
import {displayResult} from "./displayResult.js";
import {searchInput} from "../main.js";

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

export {getData, setQuery}
import {api} from "./api/api.js";
import {getResult} from "./getResult.js";
import {showError} from "./error.js";
import {searchInput} from "./constant.js";

const getData = async (query) => {
    try {
        const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
        const weather = await response.json();
        await getResult(weather)
    } catch (e) {
        showError()
        throw new Error(showError)
    }
}

const setQuery = async (event) => {
    if (event.keyCode === 13) {
        await getData(searchInput.value)
    }
}

export {getData, setQuery}

import {setQuery} from "./js/getData.js";
import {searchInput} from "./js/constant.js";

document.addEventListener('DOMContentLoaded', () => {
    searchInput.addEventListener('keypress', setQuery)
})

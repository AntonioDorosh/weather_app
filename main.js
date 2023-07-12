import {setQuery} from "./js/getData.js";

export const searchInput = document.querySelector('.search-box');


document.addEventListener('DOMContentLoaded', () => {
    searchInput.addEventListener('keypress', setQuery)
})



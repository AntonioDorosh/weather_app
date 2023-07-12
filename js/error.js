import {divError, header} from "./constant.js";

export const showError = () => {
    divError.classList.add('error')
    divError.textContent = 'Please enter your correct request'
    header.appendChild(divError)
    setTimeout(() => {
        divError.remove()
    }, 2500);
}

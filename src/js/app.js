import fetchCountries from './fetchCountries';
import countryMarkup from '../templates/country-markup.hbs'
import coutriesList from '../templates/countries-markup.hbs'
import getRefs from './refs'
var debounce = require('lodash.debounce');

const refs = getRefs();

const renderCountry = (countryName) => {
    fetchCountries(countryName).then(res => {
        refs.searchResultContainer.innerHTML = '';
        if (res.status === 404) {
            return Promise.reject(`Country with such name does not exist. Try once more...`);
        };
        if (res.length < 2) {
            refs.searchResultContainer.insertAdjacentHTML('beforeend', countryMarkup(res));
        };
        if (res.length >= 2 && res.length <= 10) {
            refs.searchResultContainer.insertAdjacentHTML('beforeend', coutriesList(res));
        };
        if (res.length > 10) {
            refs.errMsg.textContent = 'To many matches found.';
        };
    }).catch((msg) => console.log(msg));
};

const onUserInput = (e) => {
    const userInput = e.target.value;
    if (!userInput) {
        return;
    }
    renderCountry(userInput);
    refs.errMsg.textContent = '';
};

refs.input.addEventListener('input', debounce(onUserInput, 750));


import fetchCountries from './fetchCountries';
import countryInfoMarkup from '../templates/country-markup.hbs';
import coutriesListMarkup from '../templates/countries-markup.hbs';
import { showErrMsg, clearSearchResults } from './services';
import getRefs from './refs'
import './pnotify'
import { alert } from '@pnotify/core';

const { searchResultContainer } = getRefs();

export const renderCountry = (countryName) => {
    fetchCountries(countryName)
        .then(res => {
            clearSearchResults();
            const { status, length } = res;
            if (status || length > 10) {
                const msgType = length > 10 ? 'toMany' : 'badRequest';
                return Promise.reject(msgType);
            };
            if (length < 2) {
                addMarkup(countryInfoMarkup(res));
            };
            if (length >= 2 && res.length <= 10) {
                addMarkup(coutriesListMarkup(res));
            };
        }).catch(msgType => alert(showErrMsg(msgType)));
};

const addMarkup = markup => {
    searchResultContainer.insertAdjacentHTML('beforeend', markup);
};
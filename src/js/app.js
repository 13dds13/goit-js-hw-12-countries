import { renderCountry } from './markupRendering';
import getRefs from './refs'
import {showErrMsg} from './services'
const debounce = require('lodash.debounce');

const { input } = getRefs();

const onUserInput = (e) => {
    const userInput = e.target.value;
    if (!userInput) {
        return;
    };
    renderCountry(userInput);
    showErrMsg();
};

const onFocusChange = e => e.target.value = '';

input.addEventListener('input', debounce(onUserInput, 750));
input.addEventListener('focus', onFocusChange);


import showRefs from './refs';

const { searchResultContainer } = showRefs();

const textErrMessages = {
    badRequest: 'Country with such name does not exist. Edit Your request!',
    toMany: 'To many matches found.',
};

export const showErrMsg = (err) => textErrMessages[err];

export const clearSearchResults = () => searchResultContainer.innerHTML = '';
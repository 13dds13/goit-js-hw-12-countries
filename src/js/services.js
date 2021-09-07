import showRefs from './refs';

const { errMsgShow, searchResultContainer } = showRefs();

const textErrMessages = {
    badRequest: 'Country with such name does not exist. Edit Your request!',
    toMany: 'To many matches found.',
};

export const showErrMsg = (err) => errMsgShow.textContent = err ? textErrMessages[err] : '';

export const clearSearchResults = () => searchResultContainer.innerHTML = '';
export default function (countryName) {
    console.log('fetch');
    const BASE_URL = 'https://restcountries.eu/rest/v2/name';
    const SEARCH_DATA = 'fields=name;capital;population;languages;flag'
    return fetch(`${BASE_URL}/${countryName}?${SEARCH_DATA}`).then(res => res.json());
}
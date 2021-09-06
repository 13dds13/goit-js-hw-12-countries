export default function(countryName) {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(res => res.json());
}

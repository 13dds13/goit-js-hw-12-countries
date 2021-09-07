export default function () {
    const parent = document.querySelector('#parent-container');
    

    return {
        parent,
        input: parent.querySelector('#search-input'),
        errMsgShow: parent.querySelector('#msg'),
        searchResultContainer: parent.querySelector('#search-result'),
    };
}
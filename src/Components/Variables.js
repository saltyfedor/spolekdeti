
const getApiAdress = () => {
    if (window.location.origin === 'https://spolekdeti.cz') {
        return 'https://spolekdeti-api.herokuapp.com/'
    } else {
        return 'https://spolekdeti-api.herokuapp.com/'
    }
}

let apiAdress = getApiAdress();

export default apiAdress
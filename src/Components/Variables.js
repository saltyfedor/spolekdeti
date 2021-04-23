
const getApiAdress = () => {
    if (window.location.origin === 'https://spolekdeti.cz') {
        return 'https://spolekdeti-api.herokuapp.com/'
    } else {
        return 'http://localhost:3001/'
    }
}

let apiAdress = getApiAdress();

export default apiAdress
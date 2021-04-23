
const getApiAdress = () => {
    if (window.location.origin === 'https://spolekdeti.cz') {
        return 'https://spolekdeti-api.vercel.app/'
    } else {
        return 'http://localhost:3001/'
    }
}

let apiAdress = getApiAdress();

export default apiAdress
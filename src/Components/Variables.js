
const getApiAdress = () => {
    if (window.location.origin === 'https://spolekdeti-api-1opkjqphx-saltyfedor.vercel.app') {
        return 'https://spolekdeti-api-1opkjqphx-saltyfedor.vercel.app/'
    } else {
        return 'http://localhost:3001/'
    }
}

let apiAdress = getApiAdress();

export default apiAdress
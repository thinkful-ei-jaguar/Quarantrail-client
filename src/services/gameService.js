import config from '../config'


const gameService = {
    getGameinfo(){
        return fetch(`${config.API_ENDPOINT}/game`)
        .then(res =>{
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json() 
        })
    }
}

export default gameService
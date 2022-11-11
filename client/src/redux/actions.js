const axios = require('axios').default

export let GET_VIDEOGAMES = 'GET_VIDEOGAMES',
GET_GENRES = 'GET_GENRES',
GET_VIDEOGAMES_NAME = 'GET_VIDEOGAMES_NAME',
GET_VIDEOGAMES_DETAIL = 'GET_VIDEOGAMES_DETAIL'

export let getVideogames = () => {
    return async dispatch => {
        
        try {
            let json = await axios.get('http://localhost:3067/videogames')
            return dispatch({
                type: GET_VIDEOGAMES ,
                payload: json.data 
            })
        } catch (error) {
            console.log(error);            
        }
    }
}

export let getGenres = () => {
    return async dispatch => {
        
        try {
            let json = await axios.get('http://localhost:3067/genres')
            return dispatch({
                type: GET_GENRES,
                payload: json.data
            })            
        } catch (error) {
            console.log(error);
        }
    }
}

export let getVideogamesName = (name) => {
    return async dispatch => {

        try {
            let json = await axios.get(`http://localhost:3067/videogames?name=${name}`)
            return dispatch({
                type: GET_VIDEOGAMES_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export let getVideogameDetail = (id) => {
    return async dispatch => {

        try {
            let json = await axios.get(`http://localhost:3067/videogame/${id}`)
            return dispatch({
                type: GET_VIDEOGAMES_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export let postVideogames = (data) => {
    return async () => {

        try {
            let createdVideogames = await axios.post('http://localhost:3067/videogames', data)
            return createdVideogames
        } catch (error) {
            console.log(error);
        }
    }
}
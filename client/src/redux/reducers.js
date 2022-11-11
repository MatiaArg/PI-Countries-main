import { GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_DETAIL, GET_VIDEOGAMES_NAME } from "./actions";

let initialState = {
    allVideogames: [],
    videogameDetail: [],
    videogamesName: [],
    genres: []
}

let rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES: return {
            ...state,
            allVideogames : action.payload
        }

        case GET_VIDEOGAMES_DETAIL: return {
            ...state,
            videogameDetail : action.payload
        }

        case GET_VIDEOGAMES_NAME: return {
            ...state,
            videogamesName : action.payload
        }

        case GET_GENRES: return {
            ...state,
            genres : action.payload
        }

        default: return { ...state }
    }
}

export default rootReducer
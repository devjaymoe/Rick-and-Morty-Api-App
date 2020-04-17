import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const characterRequest = name => dispatch => {
    // console.log(name)
    dispatch({ type: FETCH_CHARACTERS_START });
    axios
        .get(`https://rickandmortyapi.com/api/character/?name=${encodeURI(name)}`)
        .then( response => {
            // console.log(response.data.results)
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data.results })
        })
        .catch( error => {
            // console.log('error: ', error)
            dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: error})
        })
}
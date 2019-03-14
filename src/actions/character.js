import {SET_LIKES, 
    CHARACTERS_REQUEST, 
    CHARACTERS_SUCCESS, 
    CHARACTERS_ERRORS, 
    CHARACTERS_CREATE,
    CHARACTERS_CREATE_SUCCESS} from '../types/character'

export const setLikes = payload =>({
    type: SET_LIKES,
    payload
})

export const resetLikes = () =>({
    type: ''
})

export const increaseLikes = () => (dispatch, getState) => {
    const {likes} = getState().character
    const totalLikes = likes + 1
    dispatch(setLikes(totalLikes))
}

export const decreaseLikes = () => (dispatch, getState) => {
    const {likes} = getState().character
    let decLikes = 0
    if (likes>0) {
        decLikes = likes - 1
    }    
    dispatch(setLikes(decLikes))
}

export const restartLikes = () => (dispatch) => {
    dispatch(resetLikes())
}

export const fetchCharacterSaga = () => ({
    type: CHARACTERS_REQUEST
})

export const fetchedCharacterSuccess = payload => ({
    type: CHARACTERS_SUCCESS,
    payload
})

export const fetchedCharacterError = payload => ({
    type: CHARACTERS_ERRORS,
    payload
})

export const createCharacter = payload => ({
    type: CHARACTERS_CREATE,
    payload
})

export const createCharacterSuccess = payload => ({
    type: CHARACTERS_CREATE_SUCCESS,
    payload
})
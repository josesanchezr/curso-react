import Immutable from 'seamless-immutable'

import {SET_LIKES, 
    CHARACTERS_REQUEST, 
    CHARACTERS_SUCCESS, 
    CHARACTERS_ERRORS, 
    CHARACTERS_CREATE, 
    CHARACTERS_CREATE_SUCCESS,
    CHARACTER_NEW} from '../types/character'

const defaultState = Immutable({
    likes: 0,
    characters: [],
    error: '',
    fetching: false,
    createdCharacter: null,
})

export default function character(state = defaultState, action = {}) {
    switch (action.type) {
        case SET_LIKES:
            return state.merge({
                likes: action.payload,
            })
        case CHARACTERS_REQUEST:
            return state.merge({
                error: '',
                fetching: true,
            })
        case CHARACTERS_SUCCESS:
            return state.merge({
                characters: action.payload.characters,
                error: '',
                fetching: false,
            })
        case CHARACTERS_ERRORS:
            return state.merge({
                error: action.payload.error,
                fetching: false,
            })
        case CHARACTERS_CREATE:
            return state.merge({
                error: '',
                fetching: true,
                createdCharacter: null,
            })
        case CHARACTERS_CREATE_SUCCESS:
            const newCharacters = Immutable(state.characters).concat(action.payload)
            return state.merge({
                error: '',
                fetching: false,
                createdCharacter: action.payload,
                characters: newCharacters,
            })
        case CHARACTER_NEW:
            return state.merge({
                createdCharacter: null,
            })
        default:
            return defaultState
    }
}
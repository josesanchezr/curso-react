import {call, put} from 'redux-saga/effects'
import {fetchedCharacterSuccess, fetchedCharacterError, createCharacterSuccess} from '../actions/character'
import api from '../api'

export function* fetchCharacterSaga(action) {
    try {
        const characters = yield call(
            api.characters.fetchAll
        )
        yield put(fetchedCharacterSuccess(characters))
    } catch(err) {
        console.log('Error2 creando:',err)
        yield put(fetchedCharacterError(err.response))
    }
}

export function* createCharacterSaga(action) {
    try {
        const character = yield call(            
            api.characters.create, action.payload
        )
        yield put(createCharacterSuccess(character.user))
    } catch(err) {
        console.log('Error creando:',err)
        yield put(fetchedCharacterError(err.response))
    }
}
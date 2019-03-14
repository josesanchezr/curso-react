import {takeEvery, all} from 'redux-saga/effects'
import {fetchCharacterSaga, createCharacterSaga} from './characterSagas'
import {CHARACTERS_REQUEST, CHARACTERS_CREATE} from '../types/character'

export default function* rootSaga() {
    yield all(
        yield takeEvery(CHARACTERS_CREATE, createCharacterSaga),
        yield takeEvery(CHARACTERS_REQUEST, fetchCharacterSaga),
    )
}
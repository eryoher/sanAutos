import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { getImagesByContainer }
from '../api/Images'

import { GET_IMAGES_BY_CONTAINER } from '../constants/ActionsTypes';
import { getImagesByContainerSuccess } from '../actions';

function* getImagesByContainerRequest({payload}) {
    try {
        const response = yield call(getImagesByContainer, payload.container);
        yield put( getImagesByContainerSuccess(response) );
    } catch (error) {
        
    }
}

export function* getImagesByContainerSaga() {
    yield takeLatest(GET_IMAGES_BY_CONTAINER, getImagesByContainerRequest);
}


export default function* rootSaga() {
    yield all([
        fork(getImagesByContainerSaga),
    ]);
}
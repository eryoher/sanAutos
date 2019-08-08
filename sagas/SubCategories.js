import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { getSubCategories }
from '../api/SubCategories'

import { GET_SUBCATEGORIES } from '../constants/ActionsTypes';
import { getSubCategoriesSuccess } from '../actions';

function* getSubCategoriesRequest({payload}) {
    try {
        const response = yield call(getSubCategories, payload.container);
        yield put( getSubCategoriesSuccess(response) );
    } catch (error) {
        
    }
}

export function* getSubCategoriesSaga() {
    yield takeLatest(GET_SUBCATEGORIES, getSubCategoriesRequest);
}


export default function* rootSaga() {
    yield all([
        fork(getSubCategoriesSaga),
    ]);
}
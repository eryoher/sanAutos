import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { getSubCategories, searchSubCategories, setSubCategory }
from '../api/SubCategories'

import { GET_SUBCATEGORIES, SEARCH_SUBCATEGORIES, SET_SUBCATEGORY } from '../constants/ActionsTypes';
import { getSubCategoriesSuccess, searchSubCategoriesSuccess, setSubCategorySuccess } from '../actions';

function* getSubCategoriesRequest({payload}) {
    try {
        const response = yield call(getSubCategories, payload.container);
        yield put( getSubCategoriesSuccess(response) );
    } catch (error) {
        
    }
}

function* searchSubCategoriesRequest({payload}) {
    try {
        const search = yield call(searchSubCategories, payload);
        yield put( searchSubCategoriesSuccess(search) );
    } catch (error) {
        
    }
}

function* setSubCategoriesRequest({payload}) {
    try {
        const success = yield call(setSubCategory, payload);
        yield put( setSubCategorySuccess(success) );
    } catch (error) {
        
    }
}

export function* getSubCategoriesSaga() {
    yield takeLatest(GET_SUBCATEGORIES, getSubCategoriesRequest);
}

export function* searchSubCategoriesSaga() {
    yield takeLatest(SEARCH_SUBCATEGORIES, searchSubCategoriesRequest);
}

export function* setSubCategoriesSaga() {
    yield takeLatest(SET_SUBCATEGORY, setSubCategoriesRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getSubCategoriesSaga),
        fork(searchSubCategoriesSaga),
        fork(setSubCategoriesSaga),
    ]);
}
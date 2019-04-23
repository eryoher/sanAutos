import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import { GET_CATEGORIES, GET_CATEGORIES_WITH_PRODUCT, SEARCH_CATEGORIES, SET_CATEGORY, REMOVE_CATEGORY } from '../constants/ActionsTypes';

import {    
    getCategories,
    getCategoriesWithProduct,
    searchCategories,
    setCategory,
    removeCategory
} from '../api/Categories';

import { getCategoriesSuccess, getCategoriesWithProductSuccess, searchCategoriesSuccess, setCategorySuccess, removeCategorySuccess } from '../actions/Categories';


function* getCategoriesWithProductRequest() {
    try {
        const response = yield call(getCategoriesWithProduct);
        yield put( getCategoriesWithProductSuccess(response) );
    } catch (error) {
        
    }
}

function* getCategoriesRequest() {
    try {
        const response = yield call(getCategories);
        yield put( getCategoriesSuccess(response) );
    } catch (error) {
        
    }
}

function* searchCategoriesRequest({payload}) {
    try {
        const search = yield call(searchCategories, payload);
        yield put( searchCategoriesSuccess(search) );
    } catch (error) {
        
    }
}

function* setCategoryRequest({payload}) {
    try {
        const success = yield call(setCategory, payload);
        yield put( setCategorySuccess(success) );
    } catch (error) {
        
    }
}

function* removeCategoryRequest({payload}) {
    
    try {
        const success = yield call(removeCategory, payload.categoryId);
        yield put( removeCategorySuccess(success) );
    } catch (error) {
        
    }
}

export function* getCategoriesSaga() {
    yield takeLatest(GET_CATEGORIES, getCategoriesRequest);
}

export function* searchCategoriesSaga() {
    yield takeLatest(SEARCH_CATEGORIES, searchCategoriesRequest);
}

export function* getCategoriesWithProductSaga() {
    yield takeLatest(GET_CATEGORIES_WITH_PRODUCT, getCategoriesWithProductRequest);
}

export function* setCategorySaga() {
    yield takeLatest(SET_CATEGORY, setCategoryRequest);
}

export function* removeCategorySaga() {
    yield takeLatest(REMOVE_CATEGORY, removeCategoryRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getCategoriesSaga),
        fork(getCategoriesWithProductSaga),
        fork(searchCategoriesSaga),
        fork(setCategorySaga),
        fork(removeCategorySaga),
    ]);
}
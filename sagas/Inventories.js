import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { createInventory }
from '../api/Inventories'

import { CREATE_INVENTORY } from '../constants/ActionsTypes';
import { createInventorySuccess } from '../actions';


function* createInventoryRequest({payload}) {
    
    try {
        const response = yield call(createInventory, payload);
        yield put( createInventorySuccess(response) );
    } catch (error) {
        
    }
}

export function* createInventorySaga() {
    yield takeLatest(CREATE_INVENTORY, createInventoryRequest);
}


export default function* rootSaga() {
    yield all([
        fork(createInventorySaga),
    ]);
}
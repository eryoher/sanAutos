import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { sendQuoteInformation }
from '../api/Quotes'

import { SEND_QUOTE_INFORMATION } from '../constants/ActionsTypes';
import { sendQuoteInformationSuccess } from '../actions';



function* sendQuoteInformationRequest({payload}) {
    try {
        const response = yield call(sendQuoteInformation, payload);
        yield put( sendQuoteInformationSuccess(response) );
    } catch (error) {
        
    }
}

export function* sendQuoteInformationSaga() {
    yield takeLatest(SEND_QUOTE_INFORMATION, sendQuoteInformationRequest);
}


export default function* rootSaga() {
    yield all([
        fork(sendQuoteInformationSaga),
    ]);
}
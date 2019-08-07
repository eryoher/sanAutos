import { all } from 'redux-saga/effects';
import authSagas from './Auth';
import promotionSagas from './Promotions';
import categoriesSaga from './Categories';
import paymentSagas from './Payments';
import inventorySaga from './Inventories';
import companySaga from './Companies';
import userSaga from './Users';
import imageSaga from './Images';
import authorizationSaga from './AuthorizationCode';
import quotesSaga from './Quotes';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        promotionSagas(),
        categoriesSaga(),
        paymentSagas(),
        inventorySaga(),
        companySaga(),
        userSaga(),
        imageSaga(),
        authorizationSaga(),
        quotesSaga()
    ])
}
  
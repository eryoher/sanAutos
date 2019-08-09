import { all } from 'redux-saga/effects';
import authSagas from './Auth';
import promotionSagas from './Promotions';
import categoriesSaga from './Categories';
import userSaga from './Users';
import imageSaga from './Images';
import quotesSaga from './Quotes';
import subcategoriesSaga from './SubCategories';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        promotionSagas(),
        categoriesSaga(),       
        userSaga(),
        imageSaga(),        
        quotesSaga(),
        subcategoriesSaga()
    ])
}
  
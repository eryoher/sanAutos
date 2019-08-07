import { combineReducers } from 'redux';
import authReducer from './auth'
import commonReducer from './common';
import ofertasReducer from './ofertas';
import promotionsReducer from './promotions';
import categoriesReducer from './categories';
import paymentsReducer from './payments';
import inventoryReducer from './inventories';
import companyReducer from './companies';
import userReducer from './Users';
import imageReducer from './images';
import authorizationReducer from './authorizationCode';
import quotesReducer from './quotes';

const rootReducer = combineReducers({
    auth:authReducer,
    common:commonReducer,
    deals: ofertasReducer,
    promotions:promotionsReducer,
    categories:categoriesReducer,
    payments:paymentsReducer,
    inventories:inventoryReducer,
    companies:companyReducer,
    users: userReducer,
    images: imageReducer,
    authorizationCode: authorizationReducer,
    quote:quotesReducer
});

export default rootReducer;

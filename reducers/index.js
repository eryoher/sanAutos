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
});

export default rootReducer;

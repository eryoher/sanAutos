import { combineReducers } from 'redux';
import authReducer from './auth'
import commonReducer from './common';
import promotionsReducer from './promotions';
import categoriesReducer from './categories';
import userReducer from './Users';
import imageReducer from './images';
import quotesReducer from './quotes';
import subCategReducer from './SubCategories';

const rootReducer = combineReducers({
    auth:authReducer,
    common:commonReducer,

    promotions:promotionsReducer,
    categories:categoriesReducer,
    users: userReducer,
    images: imageReducer,
    quote:quotesReducer,
    subCategories:subCategReducer
});

export default rootReducer;

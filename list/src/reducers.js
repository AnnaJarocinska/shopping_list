import {combineReducers} from 'redux';
import productsReducer from './app/products/duck';
import othersReducer from './app/others/duck';
import emailReducer from './app/email/duck/reducers';

const rootReducer = combineReducers({
    products: productsReducer,
    others: othersReducer,
    email: emailReducer,
})

export default rootReducer;
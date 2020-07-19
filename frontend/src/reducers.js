import {combineReducers} from 'redux';
import productsReducer from './app/products/duck';
import emailReducer from './app/email/duck/reducers';

const rootReducer = combineReducers({
    products: productsReducer,
    email: emailReducer,
})

export default rootReducer;
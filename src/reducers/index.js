import { combineReducers } from 'redux';
import { productReducer } from './product-reducer';


export const allReducers = combineReducers({
    allProducts: productReducer
})
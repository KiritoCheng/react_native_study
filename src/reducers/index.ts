import { combineReducers } from 'redux';

import { productsList } from './products';


export interface reducerTypes {
    productsList?: any[]
}

export default combineReducers({
    productsList
});
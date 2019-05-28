import { GET_PRODUCTS } from '../actions/products';

export let productsList = (state: any = [], action: any) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.data
        default:
            return state
    }
}
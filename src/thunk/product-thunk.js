import axios from 'axios';
import { setProducts } from '../actions/product-action';

export const fetchProducts = () => {
    return async function (dispatch, getState) {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        dispatch(setProducts(response.data))
    }
}
import { ActionTypes } from "../constants/action-types";


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: product
    }
}

export const togglePage = (pageName) => {
    return {
        type: ActionTypes.TOGGLE_PAGE,
        payload: pageName
    }
}
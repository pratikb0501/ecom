import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    myCart: [],
    currentPage: 'homepage'
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload }
        case ActionTypes.SELECTED_PRODUCT:
            let isPresent = state.myCart.find((item) => item.id === action.payload.id)
            if (isPresent) {
                return state;
            } else {
                return { ...state, myCart: [...state.myCart, action.payload] };
            }
        case ActionTypes.REMOVE_PRODUCT:
            const filteredList = state.myCart.filter(item => item.id !== action.payload.id);
            return { ...state, myCart: filteredList };
        case ActionTypes.TOGGLE_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state;
    }
}

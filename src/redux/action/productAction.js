import { ActionType } from "./action-Type";

export const setProducts = (products) =>{
    return{
        type: ActionType.SET_PRODUCTS,
        payload: products,
    };
};
export const selectProduct = (product) =>{
    return{
        type: ActionType.SELECTED_PRODUCTS,
        payload: product,
    };
};
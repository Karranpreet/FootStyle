import {ActionTypes} from "../constants/action-types";

export const setProducts = (products) =>{
  return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products
  };
};

export const selectProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
  };

  export const removeProduct = () =>{
    return {
        type: ActionTypes.REMOVED_SELECTED_PRODUCT,
    };
  };


  export const addToCart = (itemId) =>{
    return {
        type: ActionTypes.ADD_TO_CART,
        payload : {
          id: itemId
        }
    };
  };

  export const removeFromCart = (itemId) =>{
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload : {
          id: itemId
        }
    };
  };
  
  export const adjustQty = (itemId,value) =>{
    return {
        type: ActionTypes.ADJUST_QTY,
        payload : {
          id: itemId,
          qty : value
        }
    };
  };

  export const emptyCart = () =>{
    return {
        type: ActionTypes.EMPTY_CART,
        payload : {
          
        }
    };
  };
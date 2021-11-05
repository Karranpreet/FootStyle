import { ActionTypes } from "../constants/action-types";

const initialState = {
    products :[],
    cart :[],
    currentItem : null
};

 const productReducer = (state=initialState,action) =>{
    
    switch(action.type){
    case ActionTypes.SET_PRODUCTS :
    return {...state,products: action.payload};
    case ActionTypes.ADD_TO_CART :
        //get the item data from product array
        const item = state.products.find((prod)=>prod.id === action.payload.id);
        console.log(state.products);
        console.log(item);
        //check if item present in cart
       // const isPresent = state.cart.find((item)=>item.id === action.payload.id ? true : false);
       const isPresent =false;
    return {
        ...state,cart: isPresent ? state.cart.map((item)=>item.id===action.payload.id ?{...item,qty:item.qty+1}:item) : [...state.cart,{...item,qty:1}]
    };
    case ActionTypes.REMOVE_FROM_CART :
        return {...state,cart:state.cart.filter((item)=> item.id !== action.payload.id)};
    case ActionTypes.ADJUST_QTY :
        return {
            ...state,cart:state.cart.map((item)=>item.id === action.payload.id ? {...item,qty : action.payload.qty}:item)
        };
    case ActionTypes.EMPTY_CART :
            return {
                ...state,cart:[]
            };
    default :
     return state;
    }
};

export const selectProductReducer = (state={},action) =>{
    switch(action.type){
    case ActionTypes.SELECTED_PRODUCT :
    return {...state,...action.payload};
    case ActionTypes.REMOVED_SELECTED_PRODUCT :
        return {};
    default :
     return state;
    }
};

// export const cartReducer = (state=initialState,action) =>{
//     switch(action.type){
//     case ActionTypes.ADD_TO_CART :
//         //get the item data from product array
//         const item = state.products.find((prod)=>prod.id === action.payload.id);
//         console.log(state.products);
//         console.log(item);
//         //check if item present in cart
//        // const isPresent = state.cart.find((item)=>item.id === action.payload.id ? true : false);
//        const isPresent =false;
//     return {
//         ...state,cart: isPresent ? state.cart.map((item)=>item.id===action.payload.id ?{...item,qty:item.qty+1}:item) : [...state.cart,{...item,qty:1}]
//     };
//     case ActionTypes.REMOVE_FROM_CART :
//         return {...state,cart:state.cart.filter((item)=> item.id !== action.payload.id)};
//     case ActionTypes.ADJUST_QTY :
//         return {
//             ...state,cart:state.cart.map((item)=>item.id === action.payload.id ? {...item,qty : action.payload.qty}:item)
//         };
//     default :
//      return state;
//     }
// };


export default productReducer;

import { products } from "../data/data";
import { categories } from "../data/data";
import {createStore} from "redux";
let initialState = {
    products,
    cart: [],
    cartCount:0,
    currItem : null,
    categories,
}
function cartReducer(state=initialState, action){
    switch (action.type) {
        case "AddToCart": 
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id 
                ? true
                : false)

           return {
               ...state,
               cart: inCart
               ? [...state.cart]
               : [...state.cart, {...action.payload, count: 1}]
           };
        case "DeleteItem":
            return {
                ...state,
                cart: state.cart.filter((item)=>
                item.id !== action.payload.id)
            }
        case "AdjustQty":
            return {
                ...state,
                cart: state.cart.map((item)=> 
                item.id === action.payload.id 
                ? {...item, count: +action.payload.count}
                : item)
            }
        default:
            return state;
    }
}

const store = createStore(cartReducer);

export default store;

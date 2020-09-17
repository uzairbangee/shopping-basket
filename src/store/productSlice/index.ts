import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productType, cartType} from "./../../types";

const productSlice = createSlice({
    name: "cart",
    initialState : [] as cartType[],
    reducers : {
        add_to_cart : (state, action : PayloadAction<productType>) => {

            if(state.find((cart: cartType) => cart.product.id === action.payload.id)){
                return state.map((cartitem : cartType) => {
                    if(cartitem?.product?.id === action.payload.id){
                        return {
                            product: action.payload,
                            quantity: cartitem.quantity + 1
                        } 

                    }
                    
                    return cartitem
                })
            }
            else{
                state.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        }
    }
})

export const {add_to_cart} = productSlice.actions;
export default productSlice.reducer;
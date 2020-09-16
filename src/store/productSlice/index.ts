import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "cart",
    initialState : [] as any,
    reducers : {
        add_to_cart : (state, action) => {
            console.log(state);
            if(state.find((cart: any) => cart.product.id === action.payload.id)){
                state = state.map((cartitem : any) => {
                    if(cartitem?.product?.id === action.payload.id)
                        console.log(cartitem.quantity, cartitem?.product)

                        return {
                            ...cartitem,
                            quantity: cartitem.quantity + 1
                        }
                    
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
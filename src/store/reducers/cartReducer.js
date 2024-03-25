import { ADD_TO_CART } from "../actions/cartActions";
import { cartIytems } from "../initialValues/cartItems"

const initialState = {
    cartItems:cartIytems
}
export default function cartReducer(state=initialState, {type,payload}){

    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=> c.product.id === payload.id)
            break;
    
        default:
            break;
    }

}
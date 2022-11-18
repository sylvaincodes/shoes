import { ADD_TO_CART } from "../actions/cartActions";

// initial state
const initialState = {
    items : []
};


export const cartReducer = (state = initialState, action) => {
    

    if (action.type==="ADD_TO_CART") {
        
        // récuperer les parametres
        const item = action.payload.item; //le nouveau produit a ajouté
        const cartItems = state.items;  // tous les items deja ajoutés
        
        
        return {
        
            ...state,
            items : cartItems.push(item)
            
        }
    }


    return state;


}
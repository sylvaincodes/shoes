import { ADD_TO_CART } from "../actions/cartActions";
import { DELETE_FROM_CART } from "../actions/cartActions";

// initial state
const initialState = {
  products : [] ,
  total: 0,
  productCount: 0,
};

export const cartReducer = (state = initialState, action) => {

  if (action.type === ADD_TO_CART) {

    // récuperer les parametres
    const quantity = action.payload.quantity; //le nouveau produit a ajouté
    const selectedProductColor = action.payload.selectedProductColor; 
    const selectedProductSize = action.payload.selectedProductSize; 

    action.payload.product.qtySelected = quantity;
    action.payload.product.selectedProductColor = selectedProductColor;
    action.payload.product.selectedProductSize = selectedProductSize;
    action.payload.product.total = ((action.payload.product.price) - ((action.payload.product.price * action.payload.product.discount)/100)) * quantity;
    
      const filterById =state.products.filter(product => product.id !== action.payload.product.id);
    
      const products = filterById.concat(action.payload.product);

      
      if (state.products.filter(product => product.id === action.payload.product.id).length > 0 ) {
      }else{
        state.total +=action.payload.product.total;
        state.productCount ++;
      }

      return {
        ...state, 
        products: products,
        total : state.total,
        productCount : state.productCount
       
      };
    }

    if (action.type=== DELETE_FROM_CART) {
      const cartsProducts =state.products.filter(product => product.id !== action.payload.product.id);
      state.total -=action.payload.product.total;
      state.productCount --;
      return {
        ...state, 
        products: cartsProducts,
        total : state.total,
      };
    }
  
  return state;
};

import { FETCH_PRODUCTS } from "../actions/productActions";
import { FETCH_PRODUCT } from "../actions/productActions";

const initState = {
    products : [] ,
    product : {} 
}

export const productReducer = ( state = initState , action ) => {

        if (action.type=== FETCH_PRODUCTS ) {
            

            const productsItems =  action.payload.products;

            return {
                
                ...state,
                products : productsItems
            }

        } 
        
        if (action.type=== FETCH_PRODUCT ) {
            

            const productItem =  action.payload.product;

            return {
                
                ...state,
                product : productItem
            }

        } 

        return state;

}
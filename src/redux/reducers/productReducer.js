import { FETCH_PRODUCTS } from "../actions/productActions";
import { FETCH_PRODUCT } from "../actions/productActions";
import { FETCH_VARIATION } from "../actions/productActions";

const initState = {
    products : [] ,
    variations : [] ,
    product : {} ,
    variation : {} 
}

export const productReducer = ( state = initState , action ) => {

        if (action.type=== FETCH_PRODUCTS ) {
            

            const productsItems =  action.payload.data;
            const variationsItems =  action.payload.variations;

            return {
                
                ...state,
                products : productsItems,
                variations : variationsItems
            }

        } 
        
        if (action.type=== FETCH_PRODUCT ) {
            

            const productItem =  action.payload.product;

            return {
                
                ...state,
                product : productItem
            }

        }   
        
        if (action.type=== FETCH_VARIATION ) {
            
            const variationItem =  action.payload.variation;
            return {                
                ...state,
                variation : variationItem
            }

        } 

        return state;

}
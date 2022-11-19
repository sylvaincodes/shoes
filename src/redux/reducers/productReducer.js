import { FETCH_PRODUCTS } from "../actions/productActions";

const initState = {
    products : [] 
}

export const productReducer = ( state = initState , action ) => {

        if (action.type=== FETCH_PRODUCTS ) {
            

            const productsItems =  action.payload.products;

            return {
                
                ...state,
                products : productsItems
            }

        } 

        return state;

}
import { FETCH_CATEGORIES } from "../actions/categorieActions";

const initState = {
    categories : [] ,
    categorie : {} 
}

export const categorieReducer = ( state = initState , action ) => {

        if (action.type=== FETCH_CATEGORIES ) {
            
            const categoriesItems =  action.payload.categories;

            return {
                
                ...state,
                categories : categoriesItems
            }

        } 

        return state;

}
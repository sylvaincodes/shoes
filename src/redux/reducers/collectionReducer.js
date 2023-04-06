import { FETCH_COLLECTIONS } from "../actions/collectionActions";

const initState = {
    collections : [] ,
    categorie : {} 
}

export const collectionReducer = ( state = initState , action ) => {

        if (action.type=== FETCH_COLLECTIONS ) {
            
            const collectionsItems =  action.payload.collections;

            return {
                
                ...state,
                collections : collectionsItems
            }

        } 

        return state;

}
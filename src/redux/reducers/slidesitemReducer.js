import {  FETCH_SLIDESITEMS, FETCH_SLIDESITEM } from '../actions/slidesitemActions'

const initState = {
    slidesitems : [] ,
    slidesitem : {} 
}

export const slidesitemReducer = ( state = initState , action ) => {

        if (action.type=== FETCH_SLIDESITEMS ) {
            
            return {
                ...state,
                slidesitems : action.payload
            }

        } 
        
        if (action.type=== FETCH_SLIDESITEM ) {
            
            return {
                ...state,
                slidesitem : action.payload
            }

        } 

        return state;

}
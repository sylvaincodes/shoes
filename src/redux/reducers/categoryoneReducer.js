import {  SET_CATEGORYONE } from '../actions/categoryoneActions';

// state initial
const initialState = {
    categoryID : 1 ,
    category :{}
};

export const categoryoneReducer = (state = initialState,action)  => {


    if (action.type===SET_CATEGORYONE) {
        
        const categoryID = action.payload.categoryID;
        const category = action.payload.category;

        return {
            ...state,
                categoryID,
                category
        }

    }

    return state;
}  
export const SET_CATEGORYONE = "SET_CATEGORYONE";

export const setCategoryone = (categoryID) => {

    return dispatch =>{

        dispatch({
            type : SET_CATEGORYONE,
            payload : { categoryID }
        })
        
    } 

}
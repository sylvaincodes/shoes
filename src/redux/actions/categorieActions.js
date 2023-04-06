export const FETCH_CATEGORIES = "FETCH_CATEGORIES";


export const fetchCategories = (categories) =>{

    return dispacth => {
            dispacth({
                type : FETCH_CATEGORIES,
                payload : { categories : categories }
            });

    }

}

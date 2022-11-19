export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = (products) =>{

    return dispacth => {

            dispacth({
                type : FETCH_PRODUCTS,
                payload : products
            });

    }

}
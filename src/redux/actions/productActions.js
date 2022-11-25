export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";   


export const fetchProducts = (products) =>{

    return dispacth => {
            dispacth({
                type : FETCH_PRODUCTS,
                payload : { products : products }
            });

    }

}


export const fetchProduct = (product) =>{

    return dispacth => {
            
            dispacth({
                type : FETCH_PRODUCT,
                payload : { product : product }
            });

    }

}
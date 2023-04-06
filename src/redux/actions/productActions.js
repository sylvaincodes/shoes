export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";   
export const FETCH_VARIATION = "FETCH_VARIATION";   


export const fetchProducts = (products) =>{

    return dispacth => {
            dispacth({
                type : FETCH_PRODUCTS,
                payload : { data : products.data , variations : products.variations }
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

export const fetchVariation = (variation) =>{

    return dispacth => {
            
            dispacth({
                type : FETCH_VARIATION,
                payload : { variation : variation }
            });

    }

}
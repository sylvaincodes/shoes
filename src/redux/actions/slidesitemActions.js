export const FETCH_SLIDESITEMS = "FETCH_SLIDESITEMS";
export const FETCH_SLIDESITEM = "FETCH_SLIDESITEM";   


export const fetchSlidesItems = (param) =>{

    return dispacth => {
            dispacth({
                type : FETCH_SLIDESITEMS,
                payload : { slidesitems : param }
            });

    }

}


export const fetchSlidesItem = (param) =>{

    return dispacth => {
            
            dispacth({
                type : FETCH_SLIDESITEM,
                payload : { slidesitem : param }
            });

    }

}
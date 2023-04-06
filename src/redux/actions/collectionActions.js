export const FETCH_COLLECTIONS = "FETCH_COLLECTIONS";

export const fetchCollections = (collections) =>{

    return dispacth => {
            dispacth({
                type : FETCH_COLLECTIONS,
                payload : { collections : collections }
            });

    }

}

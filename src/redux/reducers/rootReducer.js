import { combineReducers } from "redux"
import { createMultilanguageReducer } from 'redux-multilanguage'
import { categoryoneReducer } from "./categoryoneReducer";
import { currencyReducer } from "./currencyReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { slidesitemReducer } from "./slidesitemReducer";
import { categorieReducer } from "./categorieReducer";
import { collectionReducer } from "./collectionReducer";

const rootReducer = combineReducers({
    
    //Reducer de multilanguage
    multilanguage: createMultilanguageReducer({currentLanguageCode: 'fr'}),

    //Importer les reducers ici
    currencyData: currencyReducer,
    categoryoneData: categoryoneReducer,
    productData : productReducer,
    cartData    : cartReducer,
    slidesitemData  : slidesitemReducer,
    catData  : slidesitemReducer,
    slidesitemData  : slidesitemReducer,
    categorieData  : categorieReducer,
    collectionData  : collectionReducer,
});

export default rootReducer;
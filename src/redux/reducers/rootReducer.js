import { combineReducers } from "redux"
import { createMultilanguageReducer } from 'redux-multilanguage'
import { categoryoneReducer } from "./categoryoneReducer";
import { currencyReducer } from "./currencyReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { slidesitemReducer } from "./slidesitemReducer";

const rootReducer = combineReducers({
    
    //Reducer de multilanguage
    multilanguage: createMultilanguageReducer({currentLanguageCode: 'fr'}),

    //Importer les reducers ici
    currencyData: currencyReducer,
    categoryoneData: categoryoneReducer,
    productData : productReducer,
    cartData    : cartReducer,
    slidesitemData  : slidesitemReducer,

});

export default rootReducer;
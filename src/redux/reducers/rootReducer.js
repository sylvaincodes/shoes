import { combineReducers } from "redux"
import { createMultilanguageReducer } from 'redux-multilanguage'
import { categoryoneReducer } from "./categoryoneReducer";
import { currencyReducer } from "./currencyReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    
    //Reducer de multilanguage
    multilanguage: createMultilanguageReducer({currentLanguageCode: 'fr'}),

    //Importer les reducers ici
    currencyData: currencyReducer,
    categoryoneData: categoryoneReducer,
    productData : productReducer

});

export default rootReducer;
import { combineReducers } from "redux"
import { createMultilanguageReducer } from 'redux-multilanguage'
import { currencyReducer } from "./currencyReducer";

const rootReducer = combineReducers({
    
    //Reducer de multilanguage
    multilanguage: createMultilanguageReducer({currentLanguageCode: 'fr'}),

    //Importer les reducers ici
    currencyData: currencyReducer,

});

export default rootReducer;
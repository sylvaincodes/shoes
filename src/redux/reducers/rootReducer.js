import { combineReducers } from "redux"
import { createMultilanguageReducer } from 'redux-multilanguage'

const rootReducer = combineReducers({
    // Configurer multi langues
    multilanguage: createMultilanguageReducer({currentLanguageCode: 'fr'}),

    //importer les reducers ici

});

export default rootReducer;
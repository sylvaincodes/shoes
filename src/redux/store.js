import  { createStore , applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {save, load } from 'redux-localstorage-simple'
import rootReducer from './reducers/rootReducer'


export const store = createStore(
        rootReducer,
        load(),
        composeWithDevTools(applyMiddleware(thunk, save()))
) 
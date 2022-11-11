import React , { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Collection } from "./pages/collections/Collection.jsx";
import  HomeOne  from "./pages/home/HomeOne.jsx";
import { connect } from 'react-redux'
import { multilanguage, loadLanguages } from "redux-multilanguage";

function App( props ) {

  useEffect(() => {
    
    // Below is to load languages, must call this once on app start,
    // and when user switch to new language that haven't loaded yet.
    props.dispatch(loadLanguages({
      languages: {
        fr: require('./translations/french.json'),
        en: require('./translations/english.json'),
      }
    }))

  })
  
  return (
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeOne/>} />
        <Route path="collections/:category" element={<Collection/>} />
        <Route path="collections/:category" element={<Collection/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default connect()(multilanguage(App));

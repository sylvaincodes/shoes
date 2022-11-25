// eslint-disable-next-line
import React , { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  HomeOne  from "./pages/home/HomeOne.jsx";
import { connect } from 'react-redux'
import { multilanguage, loadLanguages ,changeLanguage } from "redux-multilanguage";
import ShopListStandard from './pages/shop/ShopListStandard.jsx';
import Produit from './pages/product/Produit.jsx';
import Cart from './pages/others/Cart.jsx';

const App = ( props ) => {

  useEffect(() => {
    
    // Below is to load languages, must call this once on app start,
    // and when user switch to new language that haven't loaded yet.
    props.dispatch(loadLanguages({
      languages: {
        fr: require('./translations/french.json'),
        en: require('./translations/english.json'),
      }
    }))

    props.dispatch(changeLanguage(props.currentLanguageCode))

  })
  
  return (
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeOne/>} />
        <Route path="shop" element={ <ShopListStandard/> } />
        <Route path="cart" element={ <Cart/> } />
        <Route path="product/:id" element={ <Produit/> } />
      </Routes>
    </BrowserRouter>

  );
}

export default connect()(multilanguage(App));

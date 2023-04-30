// eslint-disable-next-line
import React , { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  HomeOne  from "./pages/home/HomeOne.jsx";
import { connect } from 'react-redux'
import { multilanguage, loadLanguages ,changeLanguage } from "redux-multilanguage";
import ShopListStandard from './pages/shop/ShopListStandard.jsx';
import Produit from './pages/product/Produit.jsx';
import Cart from './pages/others/Cart.jsx';
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/actions/categorieActions";
import { fetchCollections } from './redux/actions/collectionActions.js';
import { API_URL } from './helpers/index.js';
import { fetchSlidesItems } from './redux/actions/slidesitemActions.js';
import { fetchProducts } from './redux/actions/productActions.js';
import { ToastProvider } from 'react-toast-notifications';
import ScrollToTop from './components/sub-component/ScrollToTop.jsx';

const App = ( props ) => {

const dispacth = useDispatch();

useEffect(() => {
  fetch( API_URL+ "/slidesitems", {
    headers: {
    },
  })
    .then((response) => response.json())
    .then((array) => {
      dispacth(fetchSlidesItems(array));
    });
}, []); 

useEffect(() => {
  fetch( API_URL+ "/categories", {
    headers: {
    },
  })
    .then((response) => response.json())
    .then((array) => {
      dispacth(fetchCategories(array));
    });
}, []); 

useEffect(() => {
  fetch( API_URL+ "/collections", {
    headers: {
    },
  })
    .then((response) => response.json())
    .then((array) => {
     dispacth(fetchCollections(array))
    });
}, []);

useEffect(() => {
  fetch( API_URL+ "/products", {
    headers: {
    },
  })
    .then((response) => response.json())
    .then((array) => {
      dispacth(fetchProducts(array));
    });
}, []); 

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
    
    <ToastProvider placement='bottom-left' autoDismiss="true" transitionDuration={100}> 
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route exact path="/" element={<HomeOne/>} />
        <Route path="shop" element={ <ShopListStandard/> } />
        <Route path="cart" element={ <Cart/> } />
        <Route path="product/:id" element={ <Produit/> } />
      </Routes>
    </ScrollToTop>
    </BrowserRouter>
    </ToastProvider>

  );
}

export default connect()(multilanguage(App));

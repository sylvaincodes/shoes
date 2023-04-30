import React , { useEffect, useState , Fragment } from "react";
import { Helmet } from "react-helmet";
import { LayoutOne } from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import BannerOneItem from "../../components/banner/BannerTopItem";
import CategoryTitle from "../../wrappers/category/CategoryTitle";
import { multilanguage } from "redux-multilanguage";
import CategoryProducts from "../../wrappers/product/CategoryProducts";
import BannerTwo from "../../wrappers/banner/BannerTwo";
import BannerTop from "../../wrappers/banner/BannerTop";
import BannerActionOne from "../../wrappers/banner-action/BannerActionOne";
import Newsletter from "../../wrappers/newsletter/Newsletter";
import { useSelector } from "react-redux";
import NewArrivals from "../../wrappers/product/NewArrivals";

const HomeOne = (props) => {
  
  const { slidesitems, categories, collections } = useSelector( state => ({
    slidesitems: state.slidesitemData.slidesitems,
    categories: state.categorieData.categories,
    collections: state.collectionData.collections,
  }));
  
  return (
    <Fragment>
      <Helmet>
        <title>
          {props.strings["home"]} - {process.env.REACT_APP_SITENAME}
        </title>
        <meta name="description" content={props.strings["home"]} />
      </Helmet>
      
      
      <LayoutOne>
  
        <HeroSliderOne slidesitems={slidesitems.slidesitems} />

        {slidesitems &&
          slidesitems.slidesitems.map((item, key) => {
            if (item.key=="home-banner-one") {
              return <BannerOneItem data={item} key={key} />;
            }
        })}
    
        <CategoryTitle categories={categories} />

        <CategoryProducts categories={categories}/>

        <BannerTwo slidesitems={slidesitems.slidesitems} />

        <BannerActionOne slidesitems={slidesitems.slidesitems} />

        <NewArrivals collections={collections}/>

        <Newsletter/> 

        
      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(HomeOne);

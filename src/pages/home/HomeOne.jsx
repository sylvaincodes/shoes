import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { LayoutOne } from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import BannerOneItem from "../../components/banner/BannerOneItem";
import bannerSlide from "../../data/banner/banner-slide.json";
import CategoryOne from "../../wrappers/category/CategoryOne";
import { multilanguage } from "redux-multilanguage";
import Products from "../../wrappers/product/Products";

const HomeOne = (props) => {

  return (
    <Fragment>
      <Helmet>
        <title>
          {props.strings["home"]} - {process.env.REACT_APP_SITENAME}
        </title>
        <meta name="description" content={props.strings["home"]} />
      </Helmet>
      <LayoutOne>
        <HeroSliderOne />

        {bannerSlide &&
          bannerSlide.map((item, key) => {
            return <BannerOneItem data={item} key={key} />;
          })}

        <CategoryOne />

        <Products/>
        
      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(HomeOne);

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { LayoutOne } from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import BannerOneItem from "../../components/banner/BannerOneItem";
import bannerSlide from "../../data/banner/banner-slide.json";
import CategoryTitle from "../../wrappers/category/CategoryTitle";
import { multilanguage } from "redux-multilanguage";
import CategoryProducts from "../../wrappers/product/CategoryProducts";
import BannerTwo from "../../wrappers/banner/BannerTwo";
import BannerActionOne from "../../wrappers/banner-action/BannerActionOne";
import NewArrivals from "../../wrappers/product/NewArrivals";
import Newsletter from "../../wrappers/newsletter/Newsletter";

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

        <CategoryTitle />

        <CategoryProducts/>

        <BannerTwo />

        <BannerActionOne/>

        <NewArrivals/>

        <Newsletter/>
        
      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(HomeOne);

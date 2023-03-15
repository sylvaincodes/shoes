import React , { useEffect, useState , Fragment } from "react";
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
import { API_URL } from "../../helpers";
import { useSelector } from "react-redux";

const HomeOne = (props) => {
  
  const [categories, setCategories] = useState([])
  const { slidesitems } = useSelector( state => ({
    slidesitems: state.slidesitemData.slidesitems
  }));

  useEffect(() => {
    fetch( API_URL+ "/categories", {
      headers: {
      },
    })
      .then((response) => response.json())
      .then((array) => {
        setCategories(array);
      });
  }, []);
  
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

        <NewArrivals/>

        <Newsletter/>
        
      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(HomeOne);

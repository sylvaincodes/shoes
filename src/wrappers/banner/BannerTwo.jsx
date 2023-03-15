import React from "react";
import BannerTwoItem from "../../components/banner/BannerTwoItem";
import bannerTwo from "../../data/banner/banner-two.json";

function BannerTwo(props) {
  return (
    <div className="banner-two" data-reveal>
      <div className="container">
        {props.slidesitems &&
          props.slidesitems.map((item, key) => {
            if (item.key=="home-banner-two") {
            return  <BannerTwoItem data={item} key={key} /> ;
            }
          })}
      </div>
    </div>
  );
}

export default BannerTwo;

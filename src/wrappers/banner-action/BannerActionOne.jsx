import React from "react";
import BannerOneActionItem from "../../components/banner-action/BannerOneActionItem";
import bannerActionOneData from "../../data/banner-action/banner-action-one.json";

function BannerActionOne({slidesitems }) {
  return (
    <div className="banner-action" >
      <div className="container">
        <div className="wrapper">
        {slidesitems &&
          slidesitems.map((item, key) => {
            if (item.key=="home-banner-two") {

            return <BannerOneActionItem data={item}  key={key} />
            
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default BannerActionOne;

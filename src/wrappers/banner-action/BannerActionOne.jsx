import React from "react";
import BannerOneActionItem from "../../components/banner-action/BannerOneActionItem";
import bannerActionOneData from "../../data/banner-action/banner-action-one.json";

function BannerActionOne() {
  return (
    <div className="banner-action">
      <div className="container">
        <div className="wrapper">
          {bannerActionOneData && bannerActionOneData.map((item, key) => {

            return <BannerOneActionItem data={item}  key={key} />
            
          })}
        </div>
      </div>
    </div>
  );
}

export default BannerActionOne;

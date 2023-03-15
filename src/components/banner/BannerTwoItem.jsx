import React from "react";

function BannerTwoItem({data}) {
  return (
    <div className="img-banner-holder">
      <img src={data.url} alt="banner two" className="cover-image" />
    </div>
  );
}

export default BannerTwoItem;

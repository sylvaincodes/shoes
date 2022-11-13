// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { multilanguage } from "redux-multilanguage";
// import { useSelector } from 'react-redux'

function ProductItem({ data,strings}) {

  // const categoryoneData = useSelector((state) => state.categoryoneData);

  return (
    <div className="item-inline">
      <div className="img-holder">
        <img src={data.image} alt="" className="cover-image" />
      </div>

      <div className="item-content-inline">
        <h6 className="item-title">{data.title}</h6>
        <div className="product-description">
        {strings[data.tag]}
        </div>
        <div className="product-btn-actions">
          <button className="btn-black">{strings['shop']}</button>
        </div>
      </div>
    </div>
  );
}

export default multilanguage(ProductItem);

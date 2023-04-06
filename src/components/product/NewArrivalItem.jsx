// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { multilanguage } from "redux-multilanguage";
// import { useSelector } from 'react-redux'

function ProductItem({ data,strings}) {

  // const categoryoneData = useSelector((state) => state.categoryoneData);

  return (
   
   <div className="item-inline" data-reveal="left">
   
      <div className="img-holder">
        <img src={data.url} alt="" className="cover-image" />
      </div>

      <div className="item-content-inline">
   
        <h6 className="item-title">{strings[data.name]}</h6>
        <p className="text-content">
        {strings[data.description]}
        </p>
   
      </div>
   
    </div>
  );
}

export default multilanguage(ProductItem);
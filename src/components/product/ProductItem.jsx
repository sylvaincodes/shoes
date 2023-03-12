// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { multilanguage } from "redux-multilanguage";
import { ASSET_URL , CATEGRIE_FOLDER } from "../../helpers";

function ProductItem({ data,strings}) {


  return (
   
   <div className="item-inline" >
   
      <div className="img-holder">
        <img src={ data.image_url ? data.image_url : ASSET_URL+CATEGRIE_FOLDER+data.image} alt="" className="cover-image" />
      </div>

      <div className="item-content-inline">
   
        <h6 className="item-title">{strings[data.name]}</h6>
        <div className="product-description">
        {strings[data.tag]}
        </div>
   
        <div className="product-btn-actions">
          <button className="btn-black">{strings['shop']}</button>
        </div>
        <button className="btn-black fly-btn">{strings['shop']}</button>
   
      
      </div>
   
    </div>
  );
}

export default multilanguage(ProductItem);

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { multilanguage } from "redux-multilanguage";
import { useNavigate } from "react-router-dom";
import { Link
 } from "react-router-dom";
function ProductItem({ data,strings}) {

  const navigate = useNavigate();

  return (
   
   <div className="item-inline" data-reveal="left"  >
   
   <Link to={'/shop?collection_slug='+data.slug}>
      <div className="img-holder">
        <img src={data.url} alt="" className="cover-image"/>
      </div>

      <div className="item-content-inline">
   
        <h6 className="item-title">{strings[data.name]}</h6>
        <p className="text-content">
        {strings[data.description]}
        </p>
   
      </div>
   
          </Link>
    </div>
  );
}

export default multilanguage(ProductItem);
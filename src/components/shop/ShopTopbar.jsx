import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiGridFill } from "react-icons/ri";
import { multilanguage } from "redux-multilanguage";

const ShopTopbar = ({ getLayout,layout,productshowing,productCount,strings }) => {
  return (
    <div className="shop-topbar">
      <div className="container">
        <div className="wrapper">
          <p className="text-content"> {strings['showings_of']} {productshowing}  {strings['on']} {productCount} </p>
          
          <div className="icons">
            <RiGridFill className={`${layout=='grid' ? 'icon active' : '' }`} onClick={(e) => getLayout("grid") }/>
            <RiMenuFill className={`${layout=='list' ? 'icon active' : '' }`} onClick={(e) => getLayout("list")} />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default multilanguage(ShopTopbar);

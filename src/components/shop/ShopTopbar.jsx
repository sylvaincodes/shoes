import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiGridFill } from "react-icons/ri";
import { BiSidebar } from "react-icons/bi";

import { multilanguage } from "redux-multilanguage";

const ShopTopbar = ({ getLayout,layout,productshowing,productCount,strings,openSidebar,setOpenSidebar }) => {
  return (
    <div className="shop-topbar">
        <div className="wrapper">
          <p className="text-content"> {strings['showings_of']} {productshowing}  {strings['on']} {productCount} </p>
          
          <div className="icons">
            <BiSidebar className={`${openSidebar==true ? 'active' : '' }`} onClick={() => setOpenSidebar(true) }/>
            <RiGridFill className={`${layout=='grid' ? 'icon active' : '' }`} onClick={(e) => getLayout("grid") }/>
            <RiMenuFill className={`${layout=='list' ? 'icon active' : '' }`} onClick={(e) => getLayout("list")} />
          </div>
      </div>
    </div>
  );
};

export default multilanguage(ShopTopbar);

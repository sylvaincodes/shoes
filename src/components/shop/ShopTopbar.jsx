import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiGridFill } from "react-icons/ri";

const ShopTopbar = ({ getLayout,layout,productshowing,productCount }) => {
  return (
    <div className="shop-topbar">
      <div className="container">
        <div className="wrapper">
          <p className="text-content"> Affichage de {productshowing}  sur {productCount} </p>
          
          <div className="icons">
            <RiGridFill className={`${layout=='grid' ? 'icon active' : '' }`} onClick={(e) => getLayout("grid") }/>
            <RiMenuFill className={`${layout=='list' ? 'icon active' : '' }`} onClick={(e) => getLayout("list")} />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ShopTopbar;

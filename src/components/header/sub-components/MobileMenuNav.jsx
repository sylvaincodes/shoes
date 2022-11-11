import React from "react";
import menuData from "../../../data/header/mobile-menu.json";
import MobileMenuNavItem from "./MobileMenuNavItem";

function MobileMenuNav() {

  return (
    <div className="menu-wrapper">
      <ul className="menu-list">
        {menuData &&
          menuData.map((item,key) => {
            return (
              <MobileMenuNavItem  data={item}  key={key}/>
            );
          })}
      </ul>
    </div>
  );
}

export default MobileMenuNav;

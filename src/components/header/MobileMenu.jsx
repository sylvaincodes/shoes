import React from "react";
import {
  AiOutlineClose
} from "react-icons/ai";

import { multilanguage } from "redux-multilanguage";
import MobileMenuSearch from "./sub-components/MobileMenuSearch";
import MobileMenuNav from "./sub-components/MobileMenuNav";
import MobileLangCurChange from "./sub-components/MobileLangCurChange";
import SocialLinks from "./sub-components/SocialLinks";

const MobileMenu = ({
  strings,
  dispatch,
  isNavMobileOpen,
  setIsNavMobileOpen,
  currentLanguageCode,
}) => {
  const closeMobileMenu = () => {
    setIsNavMobileOpen(false);
  };


  return (
    <div className={`mobile-menu ${isNavMobileOpen ? "active" : "fade"} `}>
      <button onClick={() => closeMobileMenu()}>
        <AiOutlineClose />
      </button>

      <div className="right">
        <MobileMenuSearch />

        <div className="mobile-menu-content">
          <MobileMenuNav />

          <MobileLangCurChange />

          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default multilanguage(MobileMenu);

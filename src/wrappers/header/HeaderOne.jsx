import React, { useState, useEffect } from "react";
import IconGroups from "../../components/header/IconGroups";
import LanguageCurrency from "../../components/header/LanguageCurrency";
import { Logo } from "../../components/header/Logo";
import { connect } from "react-redux";
import { multilanguage } from "redux-multilanguage";
import { setCurrency } from "../../redux/actions/currencyActions";
import MobileMenu from "../../components/header/MobileMenu";
import DesktopMenu from "../../components/header/DesktopMenu";
import SearchInput from "../../components/header/SearchInput";
import Divider from "../../components/header/Divider";

const HeaderOne = ({
  currentLanguageCode,
  currency,
  setCurrency,
  dispatch,
  setSearchbar,
}) => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header-one");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <div className={`header-one  ${scroll > headerTop ? "sticky top-0" : ""}`}>
      <MobileMenu
              currentLanguageCode={currentLanguageCode}
              isNavMobileOpen={isNavMobileOpen}
              setIsNavMobileOpen={setIsNavMobileOpen}
      />
      
      <div className="header-top">
        <div className="container">
          <div className="row">
            <LanguageCurrency
              dispatch={dispatch}
              currentLanguageCode={currentLanguageCode}
              currency={currency}
              setCurrency={setCurrency}
            />
            <DesktopMenu />
            
          </div>
        </div>
      </div>

      <Divider></Divider>
      

      <div className="header-search">
        <div className="container">
          <div className="row">
            <Logo />
            <SearchInput />
            <IconGroups
              setSearchbar={setSearchbar}
              setIsNavMobileOpen={setIsNavMobileOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (currencyName) => {
      dispatch(setCurrency(currencyName));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(HeaderOne));

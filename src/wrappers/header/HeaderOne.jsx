import React, { useState } from "react";
import  IconGroups  from "../../components/header/IconGroups";
import LanguageCurrency from "../../components/header/LanguageCurrency";
import { Logo } from "../../components/header/Logo";
import { connect } from "react-redux";
import { multilanguage } from "redux-multilanguage";
import { setCurrency } from "../../redux/actions/currencyActions";
import MobileMenu from "../../components/header/MobileMenu";

const HeaderOne = ({
  currentLanguageCode,
  currency,
  setCurrency,
  dispatch,
}) => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  return (
    <div className="header-one">
      <div className="container">
        <div className="wrapper">
          <LanguageCurrency
            dispatch={dispatch}
            currentLanguageCode={currentLanguageCode}
            currency={currency}
            setCurrency={setCurrency}
          />

          <Logo />

          <IconGroups setIsNavMobileOpen={setIsNavMobileOpen} />

          <MobileMenu currentLanguageCode={currentLanguageCode}
            isNavMobileOpen={isNavMobileOpen}
            setIsNavMobileOpen={setIsNavMobileOpen}
          />
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

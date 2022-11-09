import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { changeLanguage ,multilanguage} from 'redux-multilanguage'


function MobileLangCurChange({strings, dispatch}) {



  const handleTriggerLanguage = (e) => {
    const newLanguage = e.target.value;
    dispatch(changeLanguage(newLanguage));
  };

  const handleTriggerCurrency = (e) => {
    const newCurrency = e.target.value;
    dispatch(changeLanguage(newCurrency));
  };

  return (
    <>
      <div className=" language-wrapper">
        <span>{strings["choose_language"]}</span>
        <select onChange={(e) => handleTriggerLanguage(e)}>
          <option value="fr">{strings["french"]}</option>
          <option value="en">{strings["english"]}</option>
        </select>
      </div>

      <div className=" currency-wrapper">
        <span>{strings["choose_currency"]}</span>
        <select onChange={(e) => handleTriggerCurrency(e)}>
          <option value="euro">{strings["EUR"]}</option>
          <option value="usd">{strings["USD"]}</option>
          <option value="xof">{strings["choose_language"]}XOF</option>
        </select>
      </div>

      <div className=" contact-details">
        <BsTelephone className="icon-small" />
        <span>+121 4456 5465</span>
      </div>

      <div className=" contact-adresse">
        <CiMail className="icon-small" />
        <span>sylvaincodeur@gmail.com</span>
      </div>
    </>
  );
}

export default multilanguage(MobileLangCurChange);

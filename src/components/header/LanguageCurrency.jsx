import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { changeLanguage } from "redux-multilanguage";
import { multilanguage } from "redux-multilanguage";


const LanguageCurrency = ({
  currentLanguageCode,
  currency,
  setCurrency,
  dispatch,
  strings,
}) => {
  const changeLanguageTrigger = (e) => {
    const newLanguage = e.target.value;
    dispatch(changeLanguage(newLanguage));
  };

  const changeCurrencyTrigger = (e) => {
    const currencyName = e.target.value;
    setCurrency(currencyName);
  };

  return (
    <div className="language-currency">
      <div className="dropdown-btn language hide">
        <span className="dropdown-btn flex-row align-item-center">
          { currentLanguageCode === "fr"
            ? `${strings['french']}`
            : currentLanguageCode === "en"
            ? `${strings['english']}`
            : `{strings['french']}`  }
          <IoIosArrowDown />
        </span>
        <div className="dropdown-content">
          <ul>
            <li>
              <button value="fr" onClick={(e) => changeLanguageTrigger(e)}>
                {strings['french']}
              </button>
            </li>
            <li>
              <button value="en" onClick={(e) => changeLanguageTrigger(e)}>
              {strings['english']}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="dropdown-btn language hide">
        <span className="dropdown-btn flex-row align-item-center">
          {currency.currencyName}
          <IoIosArrowDown />
        </span>
        <div className="dropdown-content">
          <ul>
            <li>
              <button value="USD" onClick={(e) => changeCurrencyTrigger(e)}>
              {strings['USD']}
              </button>
            </li>
            <li>
              <button value="EUR" onClick={(e) => changeCurrencyTrigger(e)}>
              {strings['EUR']}
              </button>
            </li>
            <li>
              <button value="XOF" onClick={(e) => changeCurrencyTrigger(e)}>
              {strings['XOF']}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default multilanguage(LanguageCurrency);

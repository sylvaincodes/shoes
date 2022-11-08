import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { changeLanguage } from 'redux-multilanguage'
import './style.css'

export const LanguageCurrency = ({ currentLanguageCode,currency,setCurrency,dispatch }) => {


  const changeLanguageTrigger = (e) => {
    const newLanguage = e.target.value;
    dispatch(changeLanguage(newLanguage));
  } 
  
  const changeCurrencyTrigger = (e) => {
    const currencyName = e.target.value;
    setCurrency(currencyName);
  }

  return (
    <div className="language-currency hide">
      <div className="language">
        <span className='flex-row align-item-center'>
          {currentLanguageCode === "fr" ? "Français" : currentLanguageCode === "en" ? "Anglais" : currentLanguageCode === "es" ? "Espagnol" : "Français"}
          <IoIosArrowDown />
        </span>
        <div className="language-dropdown">
          <ul>
            <li>
              <button value="fr" onClick={(e) => changeLanguageTrigger(e)}>
                Français
              </button>
            </li>
            <li>
              <button value="en" onClick={(e) => changeLanguageTrigger(e)}>
                Anglais
              </button>
            </li>
            <li>
              <button value="es" onClick={(e) => changeLanguageTrigger(e)}>
                Espagnol
              </button>
            </li>
          </ul>
        </div>
      </div>


      <div className="language">
        <span className='flex-row align-item-center'>
          {currency.currencyName}
          <IoIosArrowDown />
        </span>
        <div className="language-dropdown">
          <ul>
            <li>
              <button value="USD" onClick={(e) => changeCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={(e) => changeCurrencyTrigger(e)}>
                EUR
              </button>
            </li>
            <li>
              <button value="XOF" onClick={(e) => changeCurrencyTrigger(e)}>
                XOF
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

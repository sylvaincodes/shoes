import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export const LanguageCurrency = ({ currentLanguageCode }) => {
  return (
    <div className="language-currency hide">
        <div className="language">
          <span className='flex-row align-item-center'>
            { currentLanguageCode === "fr" ? "Français" : currentLanguageCode === "en" ? "Anglais" : currentLanguageCode === "es" ? "Espagnol" : "Français" }
            <IoIosArrowDown/>
          </span>
          <div className="language-dropdown">
            <ul>
              <li>
                <button >
                  Français
                </button>
              </li>
              <li>
                <button>
                  Anglais
                </button>
              </li>
              <li>
                <button>
                  Espagnol
                </button>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

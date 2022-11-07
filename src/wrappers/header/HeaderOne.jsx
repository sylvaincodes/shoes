import React from 'react'
import { IconGroups } from '../../components/header/IconGroups'
import { LanguageCurrency } from '../../components/header/LanguageCurrency'
import { Logo } from '../../components/header/Logo'
import './style.css'

export const HeaderOne = ({ currentLanguageCode }) => {
  return (
    <div className="header-one">
      <div className="container">
        <div className="wrapper">
          
          <LanguageCurrency  currentLanguageCode={currentLanguageCode} />

          <Logo/>

          <IconGroups/>

        </div>
      </div>
    </div>
  )
}

import React, { Fragment } from 'react'
// import { BannerTop } from '../wrappers/banner/BannerTop'
import  HeaderOne  from '../wrappers/header/HeaderOne.jsx'
import   FooterOne   from '../wrappers/footer/FooterOne.jsx'

export const LayoutOne = ({children}) => {
  return (
    <Fragment>
        {/* <BannerTop/> */}
        <HeaderOne>

        </HeaderOne>
        {children}
  
        <FooterOne>

        </FooterOne>
    </Fragment>
  )
}

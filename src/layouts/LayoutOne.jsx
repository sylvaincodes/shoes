import React, { Fragment } from 'react'
// import { BannerTop } from '../wrappers/banner/BannerTop'
import { FooterOne } from '../wrappers/footer/FooterOne'
import  HeaderOne  from '../wrappers/header/HeaderOne.jsx'

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

import React, { useState, Fragment } from 'react'
// import { BannerTop } from '../wrappers/banner/BannerTop'
import  HeaderOne  from '../wrappers/header/HeaderOne.jsx'
import   FooterOne   from '../wrappers/footer/FooterOne.jsx'
import SearchBar from '../components/header/SearchBar.jsx'

export const LayoutOne = ({children}) => {

  const [searchbar, setSearchbar] = useState(false)

  return (
    <Fragment>
        {/* <BannerTop/> */}

        <SearchBar searchbar={searchbar} setSearchbar={setSearchbar}/>

        <HeaderOne setSearchbar={setSearchbar}>

        </HeaderOne>
        {children}
  
        <FooterOne>

        </FooterOne>
    </Fragment>
  )
}

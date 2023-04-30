import React, { useState,useEffect, Fragment } from 'react'
// import { BannerTop } from '../wrappers/banner/BannerTop'
import  HeaderOne  from '../wrappers/header/HeaderOne.jsx'
import   FooterOne   from '../wrappers/footer/FooterOne.jsx'
import SearchBar from '../components/header/SearchBar.jsx'
import BannerTop from '../wrappers/banner/BannerTop.jsx'

export const LayoutOne = ({children}) => {

  const [searchbar, setSearchbar] = useState(false)
 
  useEffect(() => {
    
// SCROLL REVEALD
const revealElements = document.querySelectorAll("[data-reveal]");
const scrollReveal = function () {
    for (let index = 0; index < revealElements.length; index++) {
        const elementIsInScreen = revealElements[index].getBoundingClientRect().top < window.innerHeight /1.15;

        if (elementIsInScreen) {
            revealElements[index].classList.add("revealed")
        }
        else{
            revealElements[index].classList.remove("revealed");
        }       
    }
}
window.addEventListener('scroll', scrollReveal);
scrollReveal();

  }, [])
  
  return (
    <Fragment>
        {/* <BannerTop/> */}

        <SearchBar searchbar={searchbar} setSearchbar={setSearchbar}/>

        <BannerTop/>

        <HeaderOne setSearchbar={setSearchbar}/>

        {children}
  
        <FooterOne>

        </FooterOne>
    </Fragment>
  )
}

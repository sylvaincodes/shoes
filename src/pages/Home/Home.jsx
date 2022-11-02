import React from 'react'
import AnnonceBottom from '../../components/annoncebottom/AnnonceBottom'
import AnnonceCenter from '../../components/annoncecenter/AnnonceCenter'
import Annoncetop from '../../components/annoncetop/Annoncetop'
import CategoryTag from '../../components/category/CategoryTag'
import FixedNavbar from '../../components/fixednavbar/FixedNavbar'
import Navbar from '../../components/navbar/Navbar'
import Favorites from '../../components/products/Favorites'
import ProductList from '../../components/products/ProductList'
import Collections from '../../components/products/Collections'
import Slide from '../../components/slide/Slide'
import AnnonceBig from '../../components/annoncebottom/AnnonceBig'
import Stories from '../../components/stories/Stories'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <>
      <FixedNavbar/>
      <Annoncetop/>
      <Navbar/>
      <CategoryTag/>
      <Slide/>
      <AnnonceCenter/>
      <Favorites/>
      <AnnonceBottom/>
      <ProductList/>
      <Collections/>
      <AnnonceBig/>
      <Stories/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home
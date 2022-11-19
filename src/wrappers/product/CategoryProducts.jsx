import React from "react";
import { multilanguage } from 'redux-multilanguage'
import ProductItem from "../../components/product/ProductItem";
import favoriteData from '../../data/product/favorites.json' 
import { useSelector } from "react-redux";
import 'animate.css'

function Products() {

  const categoryoneData = useSelector(state => state.categoryoneData);
  


  return (
    <div className="products">
      <div className="container">

        <div className={categoryoneData.categoryID === categoryoneData.category.id ? "wrapper-inline animate__animated animate__bounce" : "wrapper-inline"}>
          {
                favoriteData && favoriteData.map(  (item,key) => {


                  if (item.categoryID===categoryoneData.categoryID) {

                      return <ProductItem key={key} data={item} />;

                  }


                })
          }

        </div>
      </div>
    </div>
  );
}

export default multilanguage(Products);

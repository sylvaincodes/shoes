import React  from "react";
import { multilanguage } from 'redux-multilanguage'
import ProductItem from "../../components/product/ProductItem";
import { useSelector } from "react-redux";
import 'animate.css'

function Products( { categories }) {

  const categoryoneData = useSelector(state => state.categoryoneData);

  return (
    <div className="products" data-reveal>
      <div className="container">
        <div className={categoryoneData.categoryID === categoryoneData.category.id ? "wrapper-inline animate__animated animate__bounce" : "wrapper-inline"}>
          {
                categories && categories.map((item,key) => {
                  // eslint-disable-next-line
                  if (item.parent_id==categoryoneData.categoryID) {
                      return  <ProductItem key={key} data={item} />
                  }
                  else{
                    return "";
                  }
                })
          }
        </div>
      </div>
    </div>
  );
}

export default multilanguage(Products);

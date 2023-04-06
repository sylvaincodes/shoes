import React from 'react'
import ProductGridOne from './ProductGridOne'

const ShopProducts = ({ products,layout,variations }) => {
  return (
    <div className="shop-products">
        <div className={`container ${layout ? layout : ""} `}>
            <ProductGridOne  products={products} />
        </div>
    </div>
  )
}

export default ShopProducts
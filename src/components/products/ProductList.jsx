import React from 'react'
import ProductItem from './ProductItem'
import './style.css'

function ProductList() {
    return (
        <div className="products-list">
            <div className="container">

                <h5 className='title'>Nouvelles arrivages</h5>
                <ul className='product-list'>

                    <ProductItem title="Sneaker pour homme" tag="édition limité" img="../images/favorites/p1.jpg" />
                    <ProductItem title="Sandale pour la plage" tag="edition limité" img="../images/favorites/p2.jpg" />
                    <ProductItem title="Sneaker anti collision " tag="edition limité" img="../images/favorites/p3.jpg" />
                    <ProductItem title="Sneaker Horzion" tag="edition limité"
                        img="../images/favorites/p4.jpg" />

                </ul>
            </div>
        </div>
    )
}

export default ProductList
import React from 'react'
import ProductItem from './ProductItem'
import './style.css'

function Collections() {
    return (
        <div className="products-list">
            <div className="container">

                <h5 className='title'>Les collections</h5>
                <ul className='product-list'>

                    <ProductItem title="Chaussure d'hiver" tag="Des chaussures de performance par temps humide pour 
                    que vous puissez sortir 
                    même quand il pleut" img="../images/favorites/c1.jpg" />
                    <ProductItem title="Chaussures d'automne" tag="Le revêtement hydrofuge vous gardent au chaud , 
                    au sec et surtout à l'extérieur" img="../images/favorites/c2.jpg" />
                    <ProductItem title="Bundle" tag="Epargnez 40% sur vos 2 premiers achats" img="../images/favorites/6.jpg" />
                  
                </ul>
            </div>
        </div>
    )
}

export default Collections
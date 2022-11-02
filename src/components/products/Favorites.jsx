import React from 'react'

import ProductItem from './ProductItem'
import './style.css'

import { GiJumpAcross } from 'react-icons/gi'
import { BiCycling } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import { BiWalk } from 'react-icons/bi'

function Favorites() {
  return (
    <div className="favorites-product">
        <div className="container">
            <h5 className='title'>Nos favoris</h5>
            
            <ul className='favorites-cat-list'>
                <li ><a className='cat-title' href="#">everyday</a></li>
                <li className='active'><a className='cat-title' href="#">pluie</a></li>
                <li><a className='cat-title' href="#">course</a></li>
                <li><a className='cat-title' href="#">neige</a></li>
            </ul>

            <ul className='product-list'>
                
                <ProductItem   title="Pour le sport" tag="Espadrille confortable" img="../images/favorites/1.jpg" icon={<CgGym/>}/>
                <ProductItem   title="Pour le route" tag="Sneaker légere et aérée" img="../images/favorites/8.jpg" icon={<BiCycling/>} />
                <ProductItem   title="Pour la marche" tag="Résistant" img="../images/favorites/10.jpg" icon={<BiWalk/>}/>
                <ProductItem   title="Pour les escalades" tag="Durable, Hors route, Terrain" 
                img="../images/favorites/11.jpg" icon={<GiJumpAcross/>}/>
  
            </ul>
        </div>
    </div>
  )
}

export default Favorites
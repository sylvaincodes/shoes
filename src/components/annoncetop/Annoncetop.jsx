import React from 'react'
import './style.css'

function Annoncetop() {
  return (
    <div className="annonce-top fixed" aria-label='annonce'>
        <div className='container'>
            <p className="text-content">
               Aviez besoin de chaussures pour l'automne ? Faites un tour à notre collection. 
               <strong> <a href="#" className='text-tag'> Pour hommes </a> </strong>
               <strong> <a href="#" className='text-tag'> Pour femmes </a> </strong>
            </p>
        </div>
    </div>
  )
}

export default Annoncetop
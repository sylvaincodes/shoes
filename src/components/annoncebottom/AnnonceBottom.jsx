import React from 'react'
import  './style.css'

function AnnonceBottom() {
  return (
    <div className="annonce-bottom">
        <div className="container">
            <div className="img-holder has-before">
                <img src="../images/favorites/12.jpg" alt="annonce" className='image cover' />
            </div>
            <div className="content">
              <h5 className='title'>Des chaussures pointues</h5>

              <p className='text-content'>Trouve les chaussures qui te resemble.</p>

              <button className='btn-black'>
                <a className='' href="#">c'est par ici</a>
              </button>
            </div>
        </div>
    </div>
  )
}

export default AnnonceBottom
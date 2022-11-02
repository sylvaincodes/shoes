import React from 'react'
import  './style.css'

function AnnonceItem(props) {
  return (
    <div className="annonce-bottom">
        <div className="container">
            <div className="img-holder has-before">
                <img src={props.img} alt="annonce" className='image cover' />
            </div>
            <div className="content">
              <h5 className='title'>{props.title}</h5>

              <p className='text-content'>{props.text}.</p>

              <button className='btn-black'>
                <a className='' href="#">{props.button}</a>
              </button>
              
            </div>
        </div>
    </div>
  )
}

export default AnnonceItem
import React from 'react'
import './style.css'

function Slide() {
  return (
        <div className="slide" aria-label="Slide">
            <div className="container">
                <div className="img-holder">
                    <img src="../images/slide/2.jpg" alt="slide" className='slider-image cover' />
                </div>
                <div className="content">
                    <h5 className='title'>La lumière sur vos pieds</h5>
                    <p className='section-text'>Confortable et très élégant.</p>
                    <p className='section-text'>Du style pour embellir vos pieds.</p>
                </div>

                <div className="action-btn">
                            <button className='btn animated'>
                                <a className='subtitle' href="#">shop hommes</a>
                            </button>
                            
                            <button className='btn animated'>
                                <a className='subtitle' href="#">shop femmes</a>
                            </button>
                </div>
            </div>
        </div>
  )
}

export default Slide
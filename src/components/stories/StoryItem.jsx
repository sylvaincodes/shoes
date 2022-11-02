import React from 'react'
import './style.css'

function StoryItem(props) {
  return (
        <>
           <li className='story-item'>
            <a href="#" className='story-card'>

              <div className="img-holder has-before">
                <img src={props.img} alt="course" className='image cover' /> 
                <p className="fly-item">Nouveau </p>
              </div>

              <div className="content">
                
                <h5 className='title'>{props.title}</h5>

                <p className='text-content'>{props.text}</p>
        
              </div>

              
             
             </a>
         </li>
        </>
  )
}

export default StoryItem
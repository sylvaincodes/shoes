import React from 'react'
import './style.css'
import { BsCloudRain } from 'react-icons/bs'
import { FcAutomotive } from 'react-icons/fc'
import { BiCycling } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import { BiWalk } from 'react-icons/bi'
import { GiJumpAcross } from 'react-icons/gi'


function ProductItem(props) {
  return (
    <>
      <li className='product-item'>
        <a href="#" className='product-card'>

          <div className="img-holder has-before">
            <img src={props.img} alt="course" className='image cover' />
          </div>

          <div className="content">
             {/*{props.icon}*/}
            <p className='title'>{props.title}  </p>
            
            <div className="icon">
              <span className='text-content'>{props.tag}</span>
            </div>
            <div className="action-btn">

              <button className='btn-black'>
                <a className='' href="#">shop</a>
              </button>

            </div>
          </div>

        </a>
      </li>
    </>
  )
}

export default ProductItem
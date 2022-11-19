import React from 'react'
import { AiOutlinePlusSquare } from "react-icons/ai";


const ProductGridOneItem = ({ product }) => {
  return (
    <div className="product-item">
        <div className="img-holder">
            <img src="../images/products/c1.jpg" alt="product image" className='' />
            <p className='fly-item'>30% off with fuckig code </p>
        </div>

        <div className="product-content">
            <h6 className='title'>simple title</h6>
            <p className='text-content'>content pa</p>
            <span className='price'>$1222</span>

            <div className="product-colors">
                <label htmlFor="" style={{ backgroundColor : 'red' }} className="active">
                    <input type="radio" name='product-color' value='white' />
                    <span className='checkmark'></span>
                </label><label htmlFor="" style={{ backgroundColor : 'blue' }}>
                    <input type="radio" name='product-color' value='black' />
                    <span className='checkmark'></span>
                </label><label htmlFor="" style={{ backgroundColor : 'yellow' }}>
                    <input type="radio" name='product-color' value='red' />
                    <span className='checkmark'></span>
                </label>
            </div>


        </div>
        <div className="quick-add">
            <h6 className='title'>quick add</h6>
            <AiOutlinePlusSquare  className='icon'/>
        </div>


    </div>
  )
}

export default ProductGridOneItem
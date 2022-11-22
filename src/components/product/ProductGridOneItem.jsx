import React , { useState } from 'react'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { multilanguage } from 'redux-multilanguage';


const ProductGridOneItem = ({ product , strings}) => {


  const [imagevariation, setImagevariation] = useState(false);
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );

  const handleImageColor = (e,id,image) => {
        const color = e.target.value;
        setImagevariation(image);
        setSelectedProductColor(color);

        const labels = document.querySelectorAll('.label-'+id);
        labels.forEach(element => {
            element.classList.remove('active');
        });

        e.target.labels[0].classList.add('active');
  }

  return (
    <div className="product-item">
        <div className="img-holder">
            <Link to="/product/1">
            <img src={imagevariation ?  imagevariation :  product.variation[0].image} alt={product.name} />
            {/* <p className='fly-item'>30% off with fuckig code </p> */}
            </Link>
        </div>

        <div className="product-content">
            <h6 className='title'>{product.name}</h6>
            <p className='text-content'>  {product.shortDescription.slice(1,50)}</p>
            <span className='price'>$ {product.price}</span>

            <div className="product-colors">

                    {
                        product.variation  && product.variation.map(  (row, key) =>{
                            return <label key={key} style={{ backgroundColor : row.color }}  className={ row.color === selectedProductColor ? `label-${product.id} active` : `label-${product.id}`  }>
                            <input type="radio" name='product-color' value={row.color}  onChange={ (e) => handleImageColor(e,product.id,row.image)  } checked={ row.color === selectedProductColor ? "checked" : ""  } />
                            <span className='checkmark'></span>
                            </label>
                        } )
                    }

            </div>

            <div className="quick-add">
                <h6 className='title'>{strings['quick_add']}</h6>
                <AiOutlinePlusSquare  className='icon'/>
            </div>

        </div>


    </div>
  )
}

export default multilanguage(ProductGridOneItem)
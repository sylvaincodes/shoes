import React, { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { fetchProduct } from "../../redux/actions/productActions";
import Colors from "./Colors";


const ProductGridOneItem = ({ product, strings  }) => {
  const [imagevariation, setImagevariation] = useState(product.variation[0].image[0]);
  const [selectedProductColor, setSelectedProductColor] = useState(product.variation[0].color);
  const dispatch = useDispatch();

  const handleProduct  = (product) => {

    // dispatch({
    //   type : "FETCH_PRODUCT",
    //   payload : { product : product }
    // })

     dispatch(fetchProduct(product));


  }

  return (
    <div className="product-item">
      <div className="img-holder">
        <Link onClick={()=> handleProduct(product)} to={ `/product/${product.id} `  } >
          <img
            src={imagevariation }
            alt={product.name}
          />
          {/* <p className='fly-item'>30% off with fuckig code </p> */}
        </Link>
      </div>

      <div className="product-content">
        <h6 className="title">{product.name}</h6>
        <p className="text-content"> {product.shortDescription.slice(1, 50)}</p>

        <div className="product-price">
          <span className="discount"> 
            $ {(product.price * (100 - 10)) / 100}
          </span>
          <del className="price">$ {product.price}</del>
        </div>

        <Colors product={product}  setImagevariation={setImagevariation}  setSelectedProductColor={setSelectedProductColor}  selectedProductColor={selectedProductColor}/>

        <div className="quick-add">
          <h6 className="title">{strings["quick_add"]}</h6>
          <AiOutlinePlusSquare className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default multilanguage(ProductGridOneItem);

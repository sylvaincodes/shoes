import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MenuCart = ({ strings }) => {
  return (
    <div className="shopping-cart-content">
      {/* <p className='text-content'> No item added </p> */}

      <ul>
        <li className="single-shopping-cart">
          <div className="shopping-cart-img">
            <img src="../images/products/1.jpg" alt="" className="img-fluid" />
          </div>

          <div className="shopping-cart-title">
            <h4>Lorem ipsum coat</h4>
            <h6>Qty: 3</h6>
            <span>$152.75</span>

            <div className="cart-item-vairation">
              <span>Color : blue</span>
              <span>Size : X</span>
            </div>
          </div>

          <button>
            <AiFillCloseCircle className="icon shopping-cart-delete" />
          </button>
        </li>
      </ul>
      <div className="shopping-cart-total">
        <p>
          {" "}
          {strings['total']} : <span className="shop-total" > $ 400</span>{" "}
        </p>
      </div>

      <div className="shopping-cart-btn">
        <Link className="default-btn"> {strings['see_cart']} 
        </Link>
        
        <Link className="default-btn"> {strings['go_checkout']}
        </Link>
      </div>
    </div>
  );
};

export default multilanguage(MenuCart);

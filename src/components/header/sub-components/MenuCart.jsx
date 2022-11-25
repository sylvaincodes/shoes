import React, { Fragment } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { useSelector,useDispatch } from "react-redux";

const MenuCart = ({ strings }) => {
  const products = useSelector((state) => state.cartData.products);
  const total = useSelector((state) => state.cartData.total);
  const dispatch = useDispatch();


  const handleDeleteProduct = (product) =>{
    dispatch({
      type: "DELETE_FROM_CART",
      payload: {
        product : product
      },
    });
  }

  return (
    <div className=" shopping-cart-content">
      {/* <p className='text-content'> No item added </p> */}

      <ul className="flex-column">
        
          {products
            ? products.map((product) => {
                return (
                  <li key={product.id} className="single-shopping-cart">
                    {" "}
                    <div className="shopping-cart-img">
                      <img
                        src={product.variation[0].image[0]}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="shopping-cart-title">
                      <h4>{product.name}</h4>
                      <h6>Qty: {product.qtySelected}</h6>
                      {/* <span>$152.75</span> */}

                      <div className="cart-item-vairation">
                        <span>Color : {product.selectedProductColor}</span>
                        <span>Size : {product.selectedProductSize}</span>
                      </div>
                    </div>

                    <button onClick={()=>handleDeleteProduct(product)}>
                      <AiFillCloseCircle  className="icon shopping-cart-delete" />
                    </button>
                  </li>
                );
              })
            : "<p className='text-content'> No item added </p>"}

        
      </ul>
      <div className="shopping-cart-total">
        <p>
          {" "}
          {strings["total"]} : <span className="shop-total"> $ {total.toFixed(3)}</span>{" "}
        </p>
      </div>

      <div className="shopping-cart-btn">
        <Link to="/cart" className="default-btn"> {strings["see_cart"]}</Link>

        <Link to="/checkout" className="default-btn"> {strings["go_checkout"]}</Link>
      </div>
    </div>
  );
};

export default multilanguage(MenuCart);

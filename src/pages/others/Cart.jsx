import React, { Fragment } from "react";
import { LayoutOne } from "../../layouts/LayoutOne";
import { multilanguage } from "redux-multilanguage";
import { Helmet } from "react-helmet";
import BreadcrumbsItem from "../../components/breadcrumbs/BreadcrumbsItem";
import { AiFillCloseCircle } from 'react-icons/ai'

import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = ({strings}) => {

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
    <Fragment>
      <Helmet>
        <title>
          {" "}
          {strings["cart"]} - {process.env.REACT_APP_SITENAME}{" "}
        </title>
        <meta name="description" content={strings["cart"]} />
      </Helmet>

      <LayoutOne>
        <BreadcrumbsItem
          link="/shop"
          title={strings["shop_list"]}
          subtitle={strings["cart"]}
        />

        <div className="cart">
          <div className="container">
            <div className="wrapper">
              <table>
             

  
                <tbody>
          
                  {/* <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Sub total</th>
                    <th>Action</th>
                  </tr> */}

                    {
                        products ? products.map( (product) =>{
                            return <tr data-reveal>
                                <td> <img src={product.variation[0].image[0]} /> </td>
                                <td>
                                    <div className="flex-column">
                                        <h6>{product.name}</h6>
                                        <span >{strings['color']}  : {product.selectedProductColor}</span>
                                        <span >{strings['size']}  : {product.selectedProductSize}</span>
                                    </div>
                                </td>   
                                <td className="price">{(product.total/product.qtySelected).toFixed(3)}</td>
                                <td className="qty"> {product.qtySelected}</td>
                                <td className="total"> {product.total.toFixed(3)}</td>
                                <td>
                                  <button className="icon" onClick={()=>handleDeleteProduct(product)}>
                                  <AiFillCloseCircle  className="shopping-cart-delete" />
                                  {strings['remove']} 
                                  </button>
                                </td>
                               
                            </tr>
                        })
                        : ""
                    }


                </tbody>
              </table>

              <div className="cart-actions">
                <form action="" method="post">
                  <div className="row">
                  <input className="" type="text" placeholder="coupon code" />
                  <button className="btn">{strings['apply']} </button>
                  </div>

                  <div className="row">
                    {/* <button className="btn">Update cart</button> */}
                    <button className="btn">
                       <Link to="/shop">
                       {strings['continue_shopping']} 
                       </Link>
                       </button>
                  </div>

                </form>
              </div>

              <div className="cart-summary">
                <form action="" method="post">

                    <h6>{strings['cart_totals']} </h6>
                    <ul>
                      <li><strong>{strings['subtotal']} </strong>  <span>$ {total.toFixed(3) }</span></li>
                      <li><strong>{strings['shippings']} </strong>  <span>+ $10</span></li>
                      <li><strong>{strings['tax']} </strong>  <span>+ $0</span></li>
                      <li><strong>{strings['total']} </strong>  <span>$ { (total  +10 ).toFixed(3) } </span></li>
                    </ul>
                    <div className="row">
                    <button className="btn">{strings['checkout']} </button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(Cart);

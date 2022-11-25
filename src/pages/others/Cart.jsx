import React, { Fragment } from "react";
import { LayoutOne } from "../../layouts/LayoutOne";
import { multilanguage } from "redux-multilanguage";
import { Helmet } from "react-helmet";
import BreadcrumbsItem from "../../components/breadcrumbs/BreadcrumbsItem";
import { AiFillCloseCircle } from 'react-icons/ai'

import { useSelector,useDispatch } from "react-redux";

const Cart = ({strings}) => {

    const products = useSelector((state) => state.cartData.products);
    const total = useSelector((state) => state.cartData.total);
    const dispatch = useDispatch();

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
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Sub total</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                    {
                        products ? products.map( (product) =>{
                            return <tr data-reveal>
                                <td> <img src={product.variation[0].image[0]} /> </td>
                                <td>
                                    <div className="flex-column">
                                        <h6>{product.name}</h6>
                                        <span >Color : {product.selectedProductColor}</span>
                                        <span >Size : {product.selectedProductSize}</span>
                                    </div>
                                </td>   
                                <td className="price">{(product.total/product.qtySelected).toFixed(3)}</td>
                                <td className="qty"> {product.qtySelected}</td>
                                <td className="total"> {product.total.toFixed(3)}</td>
                                <td><AiFillCloseCircle  className="icon shopping-cart-delete" /></td>
                            </tr>
                        })
                        : ""
                    }


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(Cart);

import React, { Fragment } from "react";
import { LayoutOne } from "../../layouts/LayoutOne";
import { multilanguage } from "redux-multilanguage";
import { Helmet } from "react-helmet";
import BreadcrumbsItem from "../../components/breadcrumbs/BreadcrumbsItem";
import ProductDetailOne from "../../wrappers/product/ProductDetailOne";
import ShopProducts from "../../wrappers/product/ShopProducts";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Produit = ({ strings }) => {
  // const location = useLocation();
  // const idproduct =  location.pathname.split('/')[2];

  const product = useSelector((state) => state.productData.product);
  const products = useSelector((state) =>
    state.productData.products.slice(1, 5)
  );

  return (
    <Fragment>
      <Helmet>
        <title>
          {" "}
          {strings["product_detail"]} - {process.env.REACT_APP_SITENAME}{" "}
        </title>
        <meta name="description" content={strings["product_detail"]} />
      </Helmet>

      <LayoutOne>
        <BreadcrumbsItem
          link="/shop"
          title={strings["shop_list"]}
          subtitle={strings["product_detail"]}
        />

        <ProductDetailOne product={product} />

        <h3 className="align-center fw-100 m-t-40">{strings["same_products"]}</h3>
        <ShopProducts layout="grid" products={products} />
      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(Produit);

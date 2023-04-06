import React, { Fragment } from "react";
import ProductGridOneItem from "../../components/product/ProductGridOneItem";

const ProductGridOne = ({ products }) => {

  return (
    <Fragment>
      <div className="wrapper" data-reveal>
        {products   &&
          products.map((product) => {
            
              return <ProductGridOneItem product={product} key={product.id} />;

          })}
      </div>
    </Fragment>
  );
};

export default ProductGridOne;

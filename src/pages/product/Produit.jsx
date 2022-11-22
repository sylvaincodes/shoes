import React, { Fragment } from "react";
import { LayoutOne } from "../../layouts/LayoutOne";
import { multilanguage } from "redux-multilanguage";
import { Helmet } from "react-helmet";

const Produit = ({strings}) => {
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

      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(Produit);

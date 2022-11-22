import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { multilanguage } from "redux-multilanguage";
import BreadcrumbsItem from "../../components/breadcrumbs/BreadcrumbsItem";
import { LayoutOne } from "../../layouts/LayoutOne";
import ShopProducts from "../../wrappers/product/ShopProducts";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import ShopTopbar from "../../components/shop/ShopTopbar";

const ShopListStandard = ({ location, strings }) => {
  const pageLimit = 8;
  // const { pathname } = location;

  const [layout, setLayout] = useState("list");
  const [currentData, setCurrentData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const products = useSelector((state) => state.productData.products);
  const pageCount = Math.ceil(products.length / pageLimit);
 
  const getLayout = layout => {
    setLayout(layout);
  };

  useEffect(() => {
    setCurrentData(products.slice(offset, offset + pageLimit));
  }, [products, offset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setOffset(newOffset);
  };

  return (
    <Fragment>
      <Helmet>
        <title>
          {" "}
          {strings["shop_list"]} - {process.env.REACT_APP_SITENAME}{" "}
        </title>
        <meta name="description" content={strings["shop_list"]} />
      </Helmet>

      <LayoutOne>
        <BreadcrumbsItem
          link="/"
          title={strings["home"]}
          subtitle={strings["shop_list"]}
        />

        <ShopTopbar getLayout={getLayout}  layout={layout} productCount={products.length} productshowing={currentData.length} />
        
        <ShopProducts layout={layout}  products={currentData} />

        <ReactPaginate
          initialPage="0"
          breakLabel="..."
          nextLabel="»"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="«"
          renderOnZeroPageCount={null}
          className="paginator"
          pageClassName="paginator-item"
        />


      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(ShopListStandard);

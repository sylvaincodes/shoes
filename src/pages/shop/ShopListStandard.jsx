import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { multilanguage } from "redux-multilanguage";
import BreadcrumbsItem from "../../components/breadcrumbs/BreadcrumbsItem";
import { LayoutOne } from "../../layouts/LayoutOne";
import ShopProducts from "../../wrappers/product/ShopProducts";
import ShopTopbar from "../../components/shop/ShopTopbar";
import { useSelector, useDispatch } from "react-redux";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import Paginator from "react-hooks-paginator";
import { getSortedProducts } from "../../helpers";

const ShopListStandard = ({ location, strings }) => {
  const pageLimit = 5;
  const dispatch = useDispatch();
  const [layout, setLayout] = useState("list");
  const [currentData, setCurrentData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);

  const products = useSelector((state) => state.productData.products);
  const pageCount = Math.ceil(products.length / pageLimit);

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const getLayout = (layout) => {
    setLayout(layout);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);

    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    const newOffset = (event.selected * pageLimit) % products.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
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

        <ShopSidebar getSortParams={getSortParams} openSidebar={openSidebar} />
        <div className="shop-area">
          <div className="container">
            <div className="row">
              <div className="shop-wrapper">
                <ShopTopbar
                  getLayout={getLayout}
                  layout={layout}
                  productCount={products.length}
                  productshowing={currentData.length}
                  openSidebar={openSidebar}
                  setOpenSidebar={setOpenSidebar}
                />

                <ShopProducts layout={layout} products={currentData} />

                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={4}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                    onClick={() => handlePageClick()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default multilanguage(ShopListStandard);

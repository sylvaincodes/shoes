import React, { useState, useEffect } from "react";
import Colors from "../../components/product/Colors";
import Ratings from "../../components/product/Ratings";
import { multilanguage } from "redux-multilanguage";
import Tab from "../../components/product/sub-components/Tab";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const ProductDetailOne = ({ product, strings }) => {

  const variations = useSelector((state) => state.productData.variations.filter( item  => item.product_id ==product.id ));

  var all_images = variations[0].url.split(";")
  all_images.splice(-1);

  const [imagelarger, setImagelarger] = useState(variations[0].url);

  const [imageshort, setImageshort] = useState(all_images);
  const [quantity, setQty] = useState(1);
  const [selectedProductSize, setSizeproduct] = useState("x");
  const [stocksize, setStocksize] = useState(1);
  const [variation, setVariation] = useState(variations[0]);


  const dispatch = useDispatch();

  const handleSizeActive = (e, sizedata) => {
    const size = document.querySelectorAll(".size-item");
    size.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");

    setSizeproduct(sizedata.name);
    setStocksize(sizedata.stock);
  };

  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );

  const changeImageLarger = (url) => {
    setImagelarger(url);
  };

  const descreaseQty = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const increaseQty = () => {
    setQty((prev) => (stocksize >= prev + 1 ? prev + 1 : prev));
  };
  useEffect(() => {
    if (quantity > stocksize) {
      setQty(stocksize);
    }
  }, [stocksize,quantity]);

  const handleCart = () => {  
    dispatch( 
      addToCart({
        product ,
        quantity ,
        selectedProductColor, 
        selectedProductSize 
        })
    )
  };


  return (
    <div className="product-detail">
      <div className="container">
        <div className="wrapper">
          <div className="image-wrapper" data-reveal="left">
            <div className="image-large-wrapper">
              <div className="img-holder">
                <img src={imagelarger} alt="image_larger" />
              </div>
            </div>

            <div className="image-short-wrapper">
              {imageshort.map((url, key) => {
                return (
                  <img
                    key={key}
                    className={` ${imagelarger === url ? "active" : ""}`}
                    src={url}
                    alt="image_short"
                    width="65px"
                    height="65px"
                    onClick={() => changeImageLarger(url)}
                  />
                );
              })}
            </div>
          </div>

          <div className="content" data-reveal="right">
            <div className="flex-row">
              <h6 className="">{product.name} </h6>
              
                {product.new ? <span className="round-circle"> {strings["new"]}  </span> : ""}{" "}
             
            </div>
            <div className="product-price  d-flex gap-2">
              <span className="discount"> 
              $ {variation.price_discount}
              </span>
              <del className="price">$  { variation.price   }</del>
            </div>

            <div className="ratings">
              <Ratings ratingValue={product.rating} />
            </div>

            <div className="product-options">
            <span>{strings["select_colors"]} : </span>
            <Colors
              selectedProductColor={selectedProductColor}
              setSelectedProductColor={setSelectedProductColor}
              product={product}
              setImageshort={setImageshort}
              setImagevariation={null}
            /></div>

            <div className="product-options">
              <span>{strings["select_size"]} : </span>
              <ul className="size-row">
                {/* {variations.map((single) => {
                 console.log(single) 
                  return single.color === selectedProductColor
                    ? single.size.map((sizedata, key) => {
                        return (
                          <li
                            onClick={(e) => handleSizeActive(e, sizedata)}
                            className="size-item"
                            key={key}
                          >
                            {" "}
                            {sizedata.name}
                          </li>
                        );
                      })
                    : "";
                })} */}
              </ul>
            </div>

            <div className="product-options flex-column quantity">
              <span>{strings["select_qty"]} : </span>
              <div className="cart-plus-minus">
                <RiArrowLeftSLine onClick={() => descreaseQty()} />
                <input
                  className="cart-plus-minus-box"
                  type="text"
                  name="qtybutton"
                  value={quantity}
                  readOnly
                />
                <RiArrowRightSLine onClick={() => increaseQty()} />
              </div>
            </div>

            <Tab
              title="details"
              description={product.description}
              // salecount={product.saleCount}
              category={product.category}
              // tag={product.tag}
            />

            <Tab title="shippings" description="Free" />

            <button className="btn-black"  onClick={handleCart}> {strings["add_to_cart"]}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default multilanguage(ProductDetailOne);

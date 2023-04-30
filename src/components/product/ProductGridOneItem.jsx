import React, { useState, useEffect } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { fetchProduct } from "../../redux/actions/productActions";
import Colors from "./Colors";

const ProductGridOneItem = ({ product, strings }) => {
  const variations = useSelector((state) =>
    state.productData.variations.filter((item) => item.product_id == product.id)
  );

  const [imageshort, setImageshort] = useState();
  const [imagevariation, setImagevariation] = useState(variations[0].url);
  const [selectedProductColor, setSelectedProductColor] = useState(
    variations[0]
  );
  const dispatch = useDispatch();

  const handleProduct = (product) => {
    dispatch(fetchProduct(product));
  };

  return (
    <div className="product-item">
        <Link
          onClick={() => handleProduct(product)}
          to={`/product/${product.id} `}
        >
        <div className="img-holder">
          <img src={imagevariation} alt={product.name} />
          {/* <p className='fly-item'>30% off with fuckig code </p> */}
        </div>

        </Link>

        <div className="product-content">
          <h6 className="title">{product.name}</h6>
          <p className="text-content"> {product.description.slice(0, 49)}</p>

          <div className="product-price">
            <span className="discount">
              {variations[0].price ? "$" + variations[0].price : ""}
            </span>
            <del className="price">
              {" "}
              {variations[0].price_discount
                ? "$" + variations[0].price_discount
                : ""}
            </del>
          </div>

          <Colors
            setImageshort={setImageshort}
            product={product}
            setImagevariation={setImagevariation}
            setSelectedProductColor={setSelectedProductColor}
            selectedProductColor={selectedProductColor}
            variations={variations}
          />

          
        </div>

        <Link className="quick-add-link"
          onClick={() => handleProduct(product)}
          to={`/product/${product.id} `}
          >
          <div className="quick-add">
            <h6 className="title">{strings["quick_add"]}</h6>
            <AiOutlinePlusSquare className="icon" />
          </div>
        </Link>

    </div>
  );
};

  export default multilanguage(ProductGridOneItem);

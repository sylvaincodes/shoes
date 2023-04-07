import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchVariation } from "../../redux/actions/productActions";


const Colors = ({setSizeproduct,setVariation,product,setImagevariation,selectedProductColor,setSelectedProductColor,setImageshort , variations,setImagelarger}) => {
  
    const variationProduct = useSelector((state) => state.productData.variation);
    const dispatch = useDispatch();
    const handleImageColor = (e, id, image,variation) => {

    const color = e.target.value;

    if (setVariation) {
      setVariation(variationProduct);
    }
    
    if (setImagevariation) {
      setImagevariation(image);
    }
    
    if (setImagelarger) {
      setImagelarger(image);
    }
    
    if (setSizeproduct) {
      setSizeproduct("");
    }
    
    setSelectedProductColor(color);

    let all_images =image.split(";")
    all_images.splice(-1);

    setImageshort(all_images);

    const labels = document.querySelectorAll(".label-" + id);
    labels.forEach((element) => {
      element.classList.remove("active");
    });

    e.target.labels[0].classList.add("active");

    dispatch(
      fetchVariation(variation)
    )

  };

  return (
    <div className="product-colors">
          {variations &&

            
            variations.map((row, key) => {
              if(row.attribut=="color"){            
              return (
                <label
                  key={key}
                  style={{ backgroundColor: row.valeur }}
                  className={
                    row.valeur === selectedProductColor
                      ? `label-${product.id} active`
                      : `label-${product.id}`
                  }
                >
                  <input
                    type="radio"
                    name="product-color"
                    value={row.valeur}
                    onChange={(e) => handleImageColor(e, product.id, row.url,row)}
                    checked={
                      row.valeur === selectedProductColor ? "checked" : ""
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              ); 
            }
            })}
        </div>
  )
}

export default Colors
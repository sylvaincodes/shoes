import React, { useState } from "react";

const Colors = ({product,setImagevariation,selectedProductColor,setSelectedProductColor,setImageshort , variations}) => {


  const handleImageColor = (e, id, image) => {
    const color = e.target.value;

    if (setImagevariation) {
      setImagevariation(image);
    }
    setSelectedProductColor(color);
    setImageshort(image);

    const labels = document.querySelectorAll(".label-" + id);
    labels.forEach((element) => {
      element.classList.remove("active");
    });

    e.target.labels[0].classList.add("active");
  };

  return (
    <div className="product-colors">
          {variations &&
            variations.map((row, key) => {
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
                    onChange={(e) => handleImageColor(e, product.id, row.url)}
                    checked={
                      row.valeur === selectedProductColor ? "checked" : ""
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              );
            })}
        </div>
  )
}

export default Colors
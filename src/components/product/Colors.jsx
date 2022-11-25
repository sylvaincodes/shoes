import React, { useState } from "react";

const Colors = ({product,setImagevariation,selectedProductColor,setSelectedProductColor,setImageshort}) => {


  const handleImageColor = (e, id, image) => {
    const color = e.target.value;

    if (setImagevariation) {
      setImagevariation(image[0]);
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
          {product.variation &&
            product.variation.map((row, key) => {
              return (
                <label
                  key={key}
                  style={{ backgroundColor: row.color }}
                  className={
                    row.color === selectedProductColor
                      ? `label-${product.id} active`
                      : `label-${product.id}`
                  }
                >
                  <input
                    type="radio"
                    name="product-color"
                    value={row.color}
                    onChange={(e) => handleImageColor(e, product.id, row.image)}
                    checked={
                      row.color === selectedProductColor ? "checked" : ""
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
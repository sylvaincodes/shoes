import React from "react";
import { multilanguage } from "redux-multilanguage";
import CategoryOneItem from "../../components/category/CategoryOneItem";
import categoryOne from "../../data/category/categroy-one.json";

function CategoryOne({ strings }) {

 
  return (
    <div className="category-one">
      <h5 className="title">{strings["categories"]}</h5>

      <div className="category-tag">
        <div className="container">
          <ul className="flex-row category-tag-menu">
            {categoryOne &&
              categoryOne.map((item,key) => {
                return (
                 <CategoryOneItem data={item} key={key}  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default multilanguage(CategoryOne);

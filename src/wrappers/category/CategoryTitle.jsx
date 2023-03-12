import React , { useEffect, useState } from "react";
import { multilanguage } from "redux-multilanguage";
import CategoryTitleItem from "../../components/category/CategoryTitleItem";

function CategoryTitle({ strings, categories }) {

  return (
    <div className="category-one" data-reveal>
      <h5 className="title">{strings["categories"]}</h5>

      <div className="category-tag">
        <div className="container">
          <ul className="flex-row category-tag-menu">
            {categories &&
              categories.map((item,key) => {
                return (
                 item.is_featured==1 ?
                 <CategoryTitleItem data={item} key={key}  />
                 : 
                 ""
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default multilanguage(CategoryTitle);

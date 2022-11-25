import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { multilanguage } from "redux-multilanguage";

const Tab = ({ title, description, strings, salecount,category,tag }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="product-desc flex-column">
      <div className="row" onClick={(e) => setActive((prev) => !prev)}>
        <span>{strings[title]}</span>
        {active ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
      </div>

      <div className={`flex-column text-content ${active ? "show" : "fade"}`}>
        {" "}
        <p>{description} </p>
          {salecount ? <p> <strong>{strings['sales']} : </strong> {salecount} </p> : ""} 
        <p> {  category ? <strong>{strings['category']} : </strong> : "" } {
          category ? category.map( (cat,key) =>{
            return <span key={key} className="categroy-product"> {cat} </span>
          }) : ""
        }   </p>
        
         <p> {  tag ?  <strong>{strings['tag']} : </strong> : ""} {
          tag ? tag.map( (tagitem,key) =>{
            return <span key={key} className="categroy-product"> {tagitem} </span>
          }) : ""
        }   </p>
      </div>
    </div>
  );
};

export default multilanguage(Tab);

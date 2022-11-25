import React from "react";
import { multilanguage } from "redux-multilanguage";

function BannerOneActionItem({data,strings}) {
  return (
    <>
      <h6 className="item-title" data-reveal="left">{strings[data.title]}</h6>
      <p className="text-content" data-reveal="left"> {strings[data.description]} </p>
      <button className="btn-black" data-reveal="right"> {strings[data.btn]} </button>
    </>
  );
}

export default multilanguage(BannerOneActionItem);

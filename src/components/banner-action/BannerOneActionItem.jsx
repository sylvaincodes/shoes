import React from "react";
import { multilanguage } from "redux-multilanguage";

function BannerOneActionItem({data,strings}) {
  return (
    <>
      <h6 className="item-title">{strings[data.title]}</h6>
      <p className="text-content"> {strings[data.description]} </p>
      <button className="btn-black"> {strings[data.btn]} </button>
    </>
  );
}

export default multilanguage(BannerOneActionItem);

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

function BannerOneActionItem({data,strings}) {

  const navigate = useNavigate();

  return (
    <>
      <h6 className="item-title" data-reveal="left">{strings[data.title]}</h6>
      <p className="text-content" data-reveal="left"> {strings[data.description]} </p>
      <button className="btn-black" data-reveal="right"  onClick={ () => navigate('/go')}> {strings[data.btn]} </button>
    </>
  );
}

export default multilanguage(BannerOneActionItem);

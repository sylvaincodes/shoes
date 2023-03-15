import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const BannerOneItem = ({ data, strings }) => {
  return (
    <div className="banner-one" style={{ backgroundColor: "var(--first-color)" }}>
      <div className="container">
        <p className="banner-content white">
          {strings[data.title]}
          <strong>
            <Link className="text-link white" to={data.link}>
              {strings[data.subtitle]}
            </Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default multilanguage(BannerOneItem);

import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const BannerTopItem = ({ data, strings }) => {
  return (
    <div className="banner-one sticky" style={{ backgroundColor: "var(--jet-3)" }}>
      {/* "var(--first-color)"  */}
      <div className="container">
        <p className="banner-content white">
          <Link className="text-link white" to={data.link}>
           {strings[data.title]}
          </Link>
          {/* <strong>
            <Link className="text-link white" to={data.link}>
              {data.subtitle}
            </Link>
          </strong> */}
        </p>
      </div>
    </div>
  );
};

export default multilanguage(BannerTopItem);

import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import 'animate.css'

function HeroSliderOneItem({ data, key, strings }) {
  return (
      <div className="container">

        {/* content */}
        <div className="content">
          <h5 className="title">{`  ${strings[data.title]} `}</h5>
          <h4 className="title">{`  ${strings[data.subtitle]} `}</h4>
          <p className="text first-letter-cap">{`  ${strings[data.description]} `}</p>
          <button className="btn animated">
            <Link to={data.link}>
              {strings[data.btn]}
            </Link>
          </button>
        </div>

      </div>
  );
}

export default multilanguage(HeroSliderOneItem);

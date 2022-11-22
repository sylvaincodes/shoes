import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

function DesktopMenu({strings}) {
  return (
    <div className="desktop-menu">
      <div className="dropdown-btn menu hide">
        <span className="dropdown-btn flex-row align-item-center">
          {strings['menu']}
          <IoIosArrowDown />
        </span>

        <div className="dropdown-content">
          <div className="wrapper">
            <ul className="menu-list">
              <li>
                {" "}
                <Link to="/" >{strings['home']}</Link>
              </li>
            </ul>

            <ul className="menu-list">
              <li>
                {" "}
                <Link to="/shop" >{strings['shop']}</Link>
              </li>
            </ul>

            <ul className="menu-list">
              <li>
                {" "}
                <Link>{strings['collections']}</Link>
              </li>
              <li>
                {" "}
                <Link>{strings['men']}</Link>
              </li>
              <li>
                {" "}
                <Link>{strings['women']}</Link>
              </li>
              <li>
                {" "}
                <Link>{strings['kids']}</Link>
              </li>
            </ul>

            <ul className="menu-list">
              <li>
                {" "}
                <Link>{strings['stores']}</Link>
              </li>
            </ul>

            <ul className="menu-list">
              <li>
                {" "}
                <Link>{strings['contact']}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default multilanguage(DesktopMenu);

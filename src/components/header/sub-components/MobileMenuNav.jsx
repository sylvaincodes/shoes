import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { multilanguage } from "redux-multilanguage";

function MobileMenuNav({ strings }) {
  const [toggle, setToggle] = useState(null);
  const [active, setActive] = useState(null);

  const triggerSubMenu = (id) => {
    if (toggle===id  && active===id) {
      setToggle(null); 
      setActive(null); 
    }else{
      setToggle(id);
      setActive(id);
    }
  };

  return (
    <div className="menu-wrapper">
      <ul className="menu-list">
        <li key="1" className="menu-item">
          <Link to={process.env.PUBLIC_URL + "/"}>
            <span>{strings["home"]}</span>
          </Link>
        </li>
        <li key="2" className="menu-item" onClick={ () => triggerSubMenu(2)}>
        <Link >
            <span>{strings["shop"]}</span>
            { toggle===2 ?  <AiOutlineMinus className="icon-small" /> : <AiOutlinePlus className="icon-small" /> } 
          </Link>
          <div className={`submenu-content ${toggle ===2 ? " active" : " inactive"}`}>
            <ul className="submenu-list">
              <li className="submenu-item">{strings["men"]}</li>
              <li className="submenu-item">{strings["women"]}</li>
              <li className="submenu-item">{strings["kids"]}</li>
            </ul>
          </div>
        </li>
        <li key="3" className="menu-item" onClick={ () => triggerSubMenu(3)}>
          <Link >
            <span>{strings["collections"]}</span>
           { toggle ===3 ?  <AiOutlineMinus className="icon-small" /> : <AiOutlinePlus className="icon-small" /> } 
          </Link>
          <div className={`submenu-content ${toggle ===3 ? " active" : " inactive"}`}>
            <ul className="submenu-list">
              <li className="submenu-item">{strings["men"]}</li>
              <li className="submenu-item">{strings["women"]}</li>
              <li className="submenu-item">{strings["kids"]}</li>
            </ul>
          </div>
        </li>
        <li className="menu-item">
          <Link to={process.env.PUBLIC_URL + "/stories"}>
            <span>{strings["stories"]}</span>{" "}
          </Link>
        </li>
        <li className="menu-item">
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            <span>{strings["contact"]}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default multilanguage(MobileMenuNav);

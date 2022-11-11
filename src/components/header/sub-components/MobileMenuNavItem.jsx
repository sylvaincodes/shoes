import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { multilanguage } from "redux-multilanguage";

const MobileMenuNavItem = ({ data, strings }) => {
  const [toggle, setToggle] = useState(null);
  const [active, setActive] = useState(null);

  const triggerSubMenu = (id) => {
    if (toggle === id && active === id) {
      setToggle(null);
      setActive(null);
    } else {
      setToggle(id);
      setActive(id);
    }
  };

  return (
    <>
      <li
        key={data.id}
        className="menu-item"
        onClick={() => triggerSubMenu(data.id)}
      >
        <Link
          to={data.submenu.length > 0 ? "#" : process.env.PUBLIC_URL + data.url}
        >
          <span>{strings[data.menu]}</span>
          {data.submenu.length > 0 ? (
            toggle === data.id ? (
              <AiOutlineMinus className="icon-small" />
            ) : (
              <AiOutlinePlus className="icon-small" />
            )
          ) : (
            ""
          )}
        </Link>

        {data.submenu.length > 0 ? (
          <div
            className={`submenu-content ${
              toggle === data.id ? " active" : " inactive"
            }`}
          >
            <ul className="submenu-list">
              {data.submenu &&
                data.submenu.map((submenu) => {
                  return <>
                    <li className="submenu-item">{strings[submenu.title]}</li>
                  </>;
                })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default multilanguage(MobileMenuNavItem);

import React from "react";
import {
  AiOutlineClose,
  AiOutlinePlus,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";


 const MobileMenu = ({ strings ,isNavMobileOpen, setIsNavMobileOpen }) => {
  const closeMobileMenu = () => {
    setIsNavMobileOpen(false);
    console.log(isNavMobileOpen);

  };

  return (
    <div className={`mobile-menu  ${isNavMobileOpen ? "active" : "fade"} `}>
      <button onClick={() => closeMobileMenu()}>
        <AiOutlineClose />
      </button>

      <div className="right">
        <div className="search-container">
          <form className="search-wrapper" action="#" method="post">
            <input
              className="input-text"
              type="text"
              name="search"
              id="search"
              placeholder="Entrer ici"
            />
            <RiSearch2Line className="icon-medium" />
          </form>
        </div>

        <div className="mobile-menu-content">
          <div className="menu-wrapper">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to={process.env.PUBLIC_URL + "/"}>
                <span>{strings['home']}</span>
                <AiOutlinePlus className="icon-small" />
                </Link>
              </li>
              <li className="menu-item">
              <Link to={process.env.PUBLIC_URL + "/shop"}>

                <span>{strings['shop']}</span>
                <AiOutlinePlus className="icon-small" /> </Link>
              </li>
              <li className="menu-item">
              <Link to={process.env.PUBLIC_URL + "/collections"}>

                <span>{strings['collections']}</span>
                <AiOutlinePlus className="icon-small" /> </Link>
              </li>
              <li className="menu-item">
              <Link to={process.env.PUBLIC_URL + "/stories"}>

                <span>{strings['stories']}</span> </Link>
              </li>
              <li className="menu-item">
              <Link to={process.env.PUBLIC_URL + "/contact"}>
                <span>{strings['contact']}</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className=" language-wrapper">
            <span>{strings['choose_language']}</span>
            <select name="language" id="language">
              <option value="fr">{strings['french']}</option>
              <option value="en">{strings['english']}</option>
            </select>
          </div>

          <div className=" currency-wrapper">
            <span>{strings['choose_currency']}</span>
            <select name="currency" id="currency">
              <option value="euro">{strings['EUR']}</option>
              <option value="usd">{strings['USD']}</option>
              <option value="xof">{strings['choose_language']}XOF</option>
            </select>
          </div>

          <div className=" contact-details">
            <BsTelephone className="icon-small" />
            <span>+121 4456 5465</span>
          </div>

          <div className=" contact-adresse">
            <CiMail className="icon-small" />
            <span>sylvaincodeur@gmail.com</span>
          </div>

          <div className=" socials-links">
            <AiFillTwitterCircle className="icon-medium" />
            <TiSocialYoutubeCircular className="icon-medium" />
            <AiFillGithub className="icon-medium" />
            <IoLogoWhatsapp className="icon-medium" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default multilanguage(MobileMenu)
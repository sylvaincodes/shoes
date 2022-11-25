import React from "react";
// import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { TbUserCircle } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";
import { multilanguage } from "redux-multilanguage";
import MenuCart from "./sub-components/MenuCart";
import { useSelector , useDispatch} from "react-redux";

const IconGroups = ({ setIsNavMobileOpen, strings, setSearchbar }) => {
  const triggerMobileMenu = (e) => {
    setIsNavMobileOpen(true);
  };

  const toggleSearchNavbar = () => {
    setSearchbar(true);
  };

  const handleClick = (e) =>{
      e.currentTarget.nextSibling.classList.toggle('active');
  }

  const productCount = useSelector((state) => state.cartData.productCount);


  return (
    <div className="icon-group">
      <div className="dropdown-btn icon user hide">
        <TbUserCircle />
        <div className="dropdown-content user-content">
          <ul>
            <li>
              <button>{strings["login"]}</button>
            </li>
            <li>
              <button> {strings["signup"]} </button>
            </li>
            <li>
              <button> {strings["account"]} </button>
            </li>
            <li> </li>
          </ul>
        </div>
      </div>

      <div className="icon search user hide" onClick={toggleSearchNavbar}>
        <BiSearchAlt />
      </div>

      {/* <div className="icon compare">
        <IoIosGitCompare />
        <span className="fly-number">0</span>
      </div> */}

      <div className="icon whistle">
        <AiOutlineHeart />
        <span className="fly-number">0</span>
      </div>

      <div className="icon cart">
        <button  className="cart-btn" onClick={handleClick}>
          <AiOutlineShoppingCart />
          <span className={`fly-number ${productCount > 0 ? ' bg-color' : ''}`} >{productCount}</span>
        </button>

        <MenuCart/>

        
      </div>

      <div className="icon mobile-menu-btn">
        <button onClick={() => triggerMobileMenu()}>
          <RiMenuFill className="icon-medium" />
        </button>
      </div>
    </div>
  );
};

export default multilanguage(IconGroups);

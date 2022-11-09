import React from "react";
import { IoIosGitCompare } from "react-icons/io";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart
} from "react-icons/ai";
import { TbUserCircle } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";


export const IconGroups = ({setIsNavMobileOpen}) => {


  const triggerMobileMenu = (e) => {
    setIsNavMobileOpen(true);
  }
   
  return (
    <div className="icon-group">
      <div className="dropdown-btn icon user hide">
        <TbUserCircle />
        <div className="dropdown-content user-content">
          <ul>
            <li>
              <button>
                Se connecter
              </button>
            </li>
            <li>
              <button> S'inscrire </button>
            </li>
            <li>
              <button> Mon compte </button>
            </li>
            <li> </li>
          </ul>
        </div>
      </div>

      <div className="icon search icon user hide">
        <BiSearchAlt />
      </div>

      <div className="icon compare">
        <IoIosGitCompare />
        <span className="fly-number">0</span>
      </div>

      <div className="icon whistle">
        <AiOutlineHeart />
        <span className="fly-number">0</span>
      </div>

      <div className="icon cart">
        <AiOutlineShoppingCart />
        <span className="fly-number">0</span>
      </div>

      <div className="icon mobile-menu-btn">
        <button onClick={  ()  => triggerMobileMenu() }>
        <RiMenu4Fill className="icon-medium" />
        </button>
      </div>
    </div>
  );
};

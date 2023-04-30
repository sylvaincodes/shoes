import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import image_1 from '../../assets/images/acceuils/2.jpg'
import image_2 from '../../assets/images/shops/1.jpg'
import image_3 from '../../assets/images/collections/5.jpg'
import image_4 from '../../assets/images/categories/1.jpg'

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
              
              <li className="menu-item">               
                {" "}
                <Link to="/" >
                   <span>  
                    {strings['home']}
                    </span> 
                  <img src={image_1} alt=""  width={350}/>
                </Link>
              </li>
            </ul>

            <ul className="menu-list">
            <li className="menu-item">    
                {" "}
                <Link to="/shop" > 
                <span>  
                    {strings['shop']}
                </span>
                <img src={image_2} alt=""  width={350}/>
               </Link>
              </li>
            </ul>

            <ul className="menu-list">
              <li className="menu-item">    
                {" "}
                <Link to="/shop" > 
                <span>  
                    {strings['collections']}
                </span>
                <img src={image_3} alt=""  width={350}/>
               </Link>
              </li>
            </ul>


            <ul className="menu-list">
            <li className="menu-item">    
                {" "}
                <Link to="/shop" > 
                <span>  
                    {strings['blog']}
                </span>
                <img src={image_4} alt=""  width={350}/>
               </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default multilanguage(DesktopMenu);

import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = (props) => {
  return (
    <footer className="footer" data-reveal>
      <div className="footer-top">
        <div className="container">
          <ul className="wrapper">
            <li className="title">AIDE</li>

            <li>
              <Link to="#">1-888-963-8944 </Link>
            </li>

            <li>
              <Link>help@shoes.com</Link>
            </li>

            <li>
              <Link>Retour - Echanges</Link>
            </li>

            <li>
              <Link>FAQ</Link>
            </li>

            <li>
              <Link>Remboursement</Link>
            </li>
          </ul>

          <ul className="wrapper">
            <li className="title">BOUTIQUE</li>

            <li>
              <Link>Pour les hommes</Link>
            </li>
            <li>
              <Link>Pour les femmes</Link>
            </li>
            <li>
              <Link>Vêtements pour hommes</Link>
            </li>
            <li>
              <Link>Vêtements pour femmes</Link>
            </li>
            <li>
              <Link>Stocks</Link>
            </li>
            <li>
              <Link>Gift card</Link>
            </li>
            <li>
              <Link>Refer a friend</Link>
            </li>
          </ul>

          <ul className="wrapper">
            <li className="title">Follow</li>

            <li>
              <Link>
                Offres exclusives sur tous nos produits en collection{" "}
              </Link>
            </li>
            <li className="social-icons">
              <Link>
                {" "}
                <AiFillTwitterCircle className="icon" />{" "}
              </Link>
              <Link>
                {" "}
                <BsFacebook className="icon" />{" "}
              </Link>
              <Link>
                {" "}
                <FaYoutube className="icon" />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="wrapper">
            <Link className="logo">Shoes</Link>

            <p className="text-content">
              2022 Shoes , Inc . Tous droits réservés .{" "}
              <Link className="text-link">Politique de confidentialité</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;

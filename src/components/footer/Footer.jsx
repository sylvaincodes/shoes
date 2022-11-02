import React from 'react'
import { AiFillTwitterCircle }  from 'react-icons/ai'
import { BsFacebook }  from 'react-icons/bs'
import { FaYoutube }  from 'react-icons/fa'

import  './style.css'

function Footer(props) {
  return (
      <footer className="footer">
                        
              <div className="footer-top">


                <div className="container">

                <ul className="wrapper">

                    <li className="title">
                        AIDE
                    </li>

                    <li>
                      <a href="#" >1-888-963-8944</a>
                    </li>

                    <li>
                      <a href="#" >help@shoes.com</a>
                    </li>

                    <li>
                      <a href="#" >Retour - Echanges</a>
                    </li>

                    <li>
                      <a href="#" >FAQ</a>
                    </li>

                    <li>
                      <a href="#" >Remboursement</a>
                    </li>

                </ul>
                <ul className="wrapper">
                    <li className="title">
                      BOUTIQUE
                    </li>

                    <li>
                      <a href="#" >Pour les hommes</a>
                    </li><li>
                      <a href="#" >Pour les femmes</a>
                    </li><li>
                      <a href="#" >Vêtements pour hommes</a>
                    </li><li>
                      <a href="#" >Vêtements pour femmes</a>
                    </li><li>
                      <a href="#" >Stocks</a>
                    </li><li>
                      <a href="#" >Gift card</a>
                    </li><li>
                      <a href="#" >Refer a friend</a>
                    </li>

                </ul>

                <ul className="wrapper">
                    <li className="title">
                      Follow
                    </li>

                    <li>
                    <a href="#" >Offres exclusives</a>
                    </li><li className='social-icons'>
                      <a href="#" > <AiFillTwitterCircle className='icon'/> </a>
                      <a href="#" > <BsFacebook className='icon' /> </a>
                      <a href="#" > <FaYoutube className='icon'/> </a>
                    </li>

                </ul>

              </div>

            </div>
                
            <div className="footer-bottom">

                    <div className="container">

                      <a className="logo">Shoes</a>

                      <p className="text-content">
                        2022 Shoes , Inc . Tous droits réservés . <a className="text-link">Politique de confidentialité</a>
                      </p>

                    </div>
            </div>

      </footer>
  )
}

export default Footer
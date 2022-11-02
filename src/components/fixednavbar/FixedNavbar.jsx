import React , {useEffect,useState} from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import './style.css'

function FixedNavbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      
        window.addEventListener('scroll', function () {
            const offset = window.scrollY;
            if (offset > 5) {
                setScrolled(true);
            }
            else{
                
                setScrolled(false);
            }
        })
    }, [])
    

  return (
    <div className={`navbar fixed ${ scrolled ? 'show' : '' }`} aria-label="navbar">
    <div className="container">
        <button className='icon'>
            <AiOutlineMenu />
        </button>
        <a href="#">
            <span className='logo-text'>shoes</span>
        </a>
        <button className='icon'>
            <AiOutlineShoppingCart />
        </button>
    </div>
</div>
  )
}

export default FixedNavbar